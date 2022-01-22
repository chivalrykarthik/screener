import Row from './Row';
const Tbl = (props) => {
    return (
        <table>
            <thead>
                <th>Sectors</th>
                <th>Return</th>
                {
                    props.isLast && (<th>Position</th>)
                }
            </thead>
            <tbody>
                <Row {...props} />
            </tbody>
        </table>
    )
}

export default Tbl;