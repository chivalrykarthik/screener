import { useState } from 'react';
import operators from './operators';
const Heading = ({ stock }) => {
    const { filters } = stock;
    const cols = Object.keys(filters);
    return (
        <>
            <th>StockName</th>
            {cols.map(col => <th>{col}</th>)}
            <th>Matches</th>
            <th>Action</th>
        </>
    )
}

const Col = ({ stock, searchParams, deleteStock, rowNum }) => {

    const { Name, filters } = stock;
    const cols = Object.keys(filters);
    let cnt = 0;
    const processResult = (colName, key) => {
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
    return (
        <>
            <td>{Name}</td>
            {
                cols.map((col, key) => {
                    const className = processResult(col, key) || '';
                    return <td className={className} >{filters[col]}</td>;
                })
            }
            <td>{cnt}</td>
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
                <thead>
                    <tr bold="1">
                        <Heading stock={stocks[0]} />
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default Tbl;