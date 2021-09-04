import action from './../store/action';
import operators from './../operators';
import { Avg } from './../Styles/Table';
import { COLOR } from './../constants'
import { useState } from 'react';
import { useEffect } from 'react';
import './../Tbl.css';
const Heading = ({ stocks, average, dispatch }) => {
    const [isAscending, setAscending] = useState(false);
    const { filters } = stocks[0];
    const cols = Object.keys(filters);
    const sortTable = (col) => {
        let tmpStocks = JSON.parse(JSON.stringify(stocks));
        tmpStocks.sort((a, b) => {
            if (!isAscending) {
                return a.filters[col] - b.filters[col]
            } else {
                return b.filters[col] - a.filters[col]
            }
        });
        setAscending(!isAscending);
        dispatch({ type: action.UPD_STOCKS, data: { stocks: tmpStocks } });
    }
    return (
        <>
            <th>StockName</th>
            {cols.map(col => <th onClick={sortTable.bind(null, col)} >{col}<Avg>{(Math.round(average[col].val / average[col].len))}</Avg></th>)}
            <th>Matches</th>
            <th>Action</th>
        </>
    )
}

const CheckCmp = ({ name, value, onChange, average }) => {

    const { rm } = average[name];
    const isChecked = (value === '' || rm.includes(parseFloat(value))) ? true : false
    const [checked, setChecked] = useState(isChecked);
    useEffect(() => {
        const isChecked = (value === '' || rm.includes(parseFloat(value))) ? true : false;
        setChecked(isChecked);
    }, [...rm]);

    const handleChange = (e) => {
        setChecked(!checked);
        onChange(e);
    }
    return (
        <>
            <input type="checkbox" name={name} value={value} onChange={handleChange} checked={checked} />
        </>
    )
}
const Col = ({ stock, rowNum, average, filtersCnt, searchParams, dispatch }) => {
    const { Name, filters } = stock;
    const cols = Object.keys(filters);
    const [isHighlight, setHighlight] = useState(false);
    const calcPercent = (matchCnt) => {
        if (filtersCnt <= 0) return;
        const percentage = ((matchCnt / filtersCnt) * 100);
        if (percentage >= 90) {
            return COLOR.RESULT.ABOVE_NINTY;
        } else if (percentage >= 80) {
            return COLOR.RESULT.ABOVE_EIGHTY;
        } else if (percentage >= 70) {
            return COLOR.RESULT.ABOVE_SEVENTY;
        } else if (percentage >= 60) {
            return COLOR.RESULT.ABOVE_SIXTY;
        } else if (percentage >= 50) {
            return COLOR.RESULT.ABOVE_FIFTY;
        } else {
            return COLOR.RESULT.BELOW_FIFTY;
        }
    }
    let cnt = 0;
    const processResult = (colName) => {
        const params = searchParams[colName];

        if (params && operators[params.operator]) {
            const value = (params.operator === 'LT' || params.operator === 'GT') ? (filters[params.value] || 0) : params.value;
            const className = operators[params.operator](filters[colName], value) ? 'greenCol' : 'redCol';
            if (className === 'greenCol') {
                cnt++;
            }
            return className;
        }
        return;
    }
    const handleChange = function (e) {
        const { checked, value, name } = e.target;
        const updType = checked ? 'sub' : 'add';
        dispatch({ type: action.UPD_AVG, data: { updType, filter: name, num: value } });
    }
    const handleDelete = (rowNum) => {
        dispatch({ type: action.DELETE_STOCK, data: { key: rowNum } });
        dispatch({ type: action.ADD_AVG });
    }
    const checkHighlight = () => {
        setHighlight(!isHighlight);
    }
    return (
        <>
            <td className={isHighlight ? 'highlight' : ''}>
                <input type="checkbox" onChange={checkHighlight} />
                {Name}
            </td>
            {
                cols.map((col, key) => {
                    const className = processResult(col, key) || '';
                    return (<td className={`${className} ${isHighlight ? 'highlight' : ''}`} >

                        <CheckCmp name={col} value={filters[col]} average={average} onChange={handleChange} />
                        {filters[col]}
                    </td>);
                })
            }
            <td className={isHighlight ? 'highlight' : ''} style={calcPercent(cnt)}>{cnt}</td>
            <td><button onClick={handleDelete.bind(null, rowNum)}>Delete</button></td>
        </>
    )
}
const Rows = (props) => {
    return (
        <>
            <tr>
                <Col {...props} />
            </tr>
        </>
    )
}

const Tbl = (
    { average, stocks, filtersCnt, searchParams, dispatch }
) => {

    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <Heading average={average} stocks={stocks} dispatch={dispatch} />
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock, rowNum) => <Rows stock={stock} rowNum={rowNum} average={average} filtersCnt={filtersCnt} searchParams={searchParams} dispatch={dispatch} />)}
                </tbody>
                <thead>
                    <tr bold="1">
                        <Heading average={average} stocks={stocks} dispatch={dispatch} />
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default Tbl;