import operators from './operators';
const Heading = ({ stock }) => {
    const { filters } = stock;
    const cols = Object.keys(filters);
    return (
        <>
            <td>StockName</td>
            {cols.map(col => <td>{col}</td>)}
            <td>Action</td>
        </>
    )
}

const Col = ({ stock, searchParams, deleteStock, rowNum }) => {
    const { Name, filters } = stock;
    const cols = Object.keys(filters);
    const processResult = (colName) => {
        const params = searchParams[colName];
        if (params && operators[params.operator]) {
            return operators[params.operator](filters[colName], params.value) ? 'greenCol' : 'redCol';
        }
        return;
    }
    return (
        <>
            <td>{Name}</td>
            {
                cols.map(col => {
                    const className = processResult(col) || '';
                    return <td className={className} >{filters[col]}</td>;
                })
            }
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

const Tbl = ({ stocks, searchParams, deleteStock }) => {
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <Heading stock={stocks[0]} />
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock, rowNum) => <Rows stock={stock} searchParams={searchParams} rowNum={rowNum} deleteStock={deleteStock} />)}
                </tbody>
            </table>
        </>
    )
}
export default Tbl;