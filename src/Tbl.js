import { useStore } from './store';
import action from './store/action';
import operators from './operators';
import { Avg } from './Styles/Table';
import { COLOR } from './constants'
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
                        <Heading average={store.average} stock={store.stocks[0]} />
                    </tr>
                </thead>
                <tbody>
                    {store.stocks.map((stock, rowNum) => <Rows stock={stock} rowNum={rowNum} />)}
                </tbody>
                <thead>
                    <tr bold="1">
                        <Heading average={store.average} stock={store.stocks[0]} />
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default Tbl;