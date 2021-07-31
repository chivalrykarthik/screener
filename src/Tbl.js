import operators from './operators';
import { Avg } from './Styles/Table';
const Heading = ({ stock, average }) => {
    const { filters } = stock;
    const cols = Object.keys(filters);
    return (
        <>
            <th>StockName</th>
            {cols.map(col => <th>{col}<Avg>{(Math.round(average[col].val / average[col].len))}</Avg></th>)}
            <th>Matches</th>
            <th>Action</th>
        </>
    )
}

const Col = ({ stock, searchParams, deleteStock, rowNum, filtersCnt, updAvg }) => {

    const { Name, filters } = stock;
    const cols = Object.keys(filters);
    const calcPercent = (matchCnt) => {
        if (filtersCnt <= 0) return;
        const percentage = ((matchCnt / filtersCnt) * 100);
        if (percentage >= 90) {
            return { background: 'green', color: 'rgb(255,255,255)' };
        } else if (percentage >= 80) {
            return { background: 'lightgreen', color: 'rgb(255,255,255)' };
        } else if (percentage >= 70) {
            return { background: 'skyblue', color: 'rgb(255,255,255)' };
        } else if (percentage >= 60) {
            return { background: 'orange', color: 'rgb(255,255,255)' };
        } else if (percentage >= 50) {
            return { background: 'yellow', color: 'rgb(255,255,255)' };
        } else {
            return { background: 'red', color: 'rgb(255,255,255)' };
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
    const handleChange = (e) => {
        const { checked, value, name } = e.target;
        if (checked) {
            updAvg('sub', name, value);
        } else {
            updAvg('add', name, value);
        }
    }
    return (
        <>
            <td>{Name}</td>
            {
                cols.map((col, key) => {
                    const className = processResult(col, key) || '';
                    return (<td className={className} >
                        <input type="checkbox" name={col} value={filters[col]} onChange={handleChange} />
                        {filters[col]}
                    </td>);
                })
            }
            <td style={calcPercent(cnt)}>{cnt}</td>
            <td><button onClick={deleteStock.bind(null, rowNum)}>Delete</button></td>
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

const Tbl = ({ stocks, searchParams, deleteStock, average, filtersCnt, updAvg }) => {
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <Heading average={average} stock={stocks[0]} />
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock, rowNum) => <Rows updAvg={updAvg} filtersCnt={filtersCnt} stock={stock} searchParams={searchParams} rowNum={rowNum} deleteStock={deleteStock} />)}
                </tbody>
                <thead>
                    <tr bold="1">
                        <Heading average={average} stock={stocks[0]} />
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default Tbl;