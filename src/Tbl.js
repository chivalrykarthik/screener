import { useStore } from './store';
import action from './store/action';
import operators from './operators';
import { Avg } from './Styles/Table';
import { COLOR } from './constants'
import { useState } from 'react';
import { useEffect } from 'react';
const Heading = ({ stocks, average }) => {
    const [, dispatch] = useStore();
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

const CheckCmp = ({ name, value, onChange }) => {
    const [store] = useStore();
    const { rm } = store.average[name];
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
const Col = ({ stock, rowNum }) => {
    const [store, dispatch] = useStore();
    const { Name, filters } = stock;
    const cols = Object.keys(filters);
    const { filtersCnt } = store;
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
        const params = store.searchParams[colName];

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
    return (
        <>
            <td>{Name}</td>
            {
                cols.map((col, key) => {
                    const className = processResult(col, key) || '';
                    return (<td className={className} >

                        <CheckCmp name={col} value={filters[col]} onChange={handleChange} />
                        {filters[col]}
                    </td>);
                })
            }
            <td style={calcPercent(cnt)}>{cnt}</td>
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

const Tbl = () => {
    const [store] = useStore();
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <Heading average={store.average} stocks={store.stocks} />
                    </tr>
                </thead>
                <tbody>
                    {store.stocks.map((stock, rowNum) => <Rows stock={stock} rowNum={rowNum} />)}
                </tbody>
                <thead>
                    <tr bold="1">
                        <Heading average={store.average} stocks={store.stocks} />
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default Tbl;