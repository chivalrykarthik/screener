import { red } from '@material-ui/core/colors';
import search from './search';
const Heading = ({ stock }) => {
    const { filters } = stock;
    const cols = Object.keys(filters);
    return (
        <>
            <td>StockName</td>
            {cols.map(col => <td>{col}</td>)}
        </>
    )
}
const Col = ({ stock, searchParams }) => {
    const { name, filters } = stock;
    const cols = Object.keys(filters);
    const processResult = (colName) => {
        const params = searchParams[colName];
        if (params && search[params.operator]) {
            return search[params.operator](filters[colName], params.value) ? 'greenCol' : 'redCol';
        }
        return;

    }
    return (
        <>
            <td>{name}</td>
            {
                cols.map(col => {
                    const className = processResult(col) || '';
                    return <td className={className} >{filters[col]}</td>;
                })
            }
        </>
    )
}
const Rows = ({ stock, searchParams }) => {
    return (
        <>
            <tr>
                <Col stock={stock} searchParams={searchParams} />
            </tr>
        </>
    )
}

const Tbl = ({ stocks, searchParams }) => {
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <Heading stock={stocks[0]} />
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => <Rows stock={stock} searchParams={searchParams} />)}
                </tbody>
            </table>
        </>
    )
}
export default Tbl;