import Position from './Position';
import { prepareObj } from './../util';
const Row = ({ sectors, index, isLast, finalStat }) => {
    const rows = prepareObj(sectors, index, finalStat);
    return (
        <>
            {rows.map((row) => {
                return (
                    <>
                        <tr>
                            <td>{row.sector}</td>
                            <td>{row.rtn}</td>
                            {
                                isLast && (<td><Position points={row.position[1]} /></td>)
                            }
                        </tr>
                    </>
                )
            })
            }
        </>
    )
}

export default Row;