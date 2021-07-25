const Heading = ({ average }) => {
    const { cols } = average;
    const columns = Object.keys(cols);
    return (
        <>

            {columns.map(col => <th>{col}</th>)}

        </>
    )
}
const StockAvg = ({ average }) => {
    const { cols, len } = average;
    const columns = Object.keys(cols);

    return (
        <>
            <table border="1">


                <thead>
                    <tr>
                        <th></th>
                        {columns.map((col) => (<th>{col}</th>))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>StockAverage</td>
                        {columns.map((col) => (<td>{Math.round(cols[col] / len)}</td>))}
                    </tr>
                </tbody>





            </table>
        </>
    )
}

export default StockAvg;