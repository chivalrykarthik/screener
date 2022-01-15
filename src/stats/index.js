import data from './data.json';
import { StatsContainer, StatsItem } from './style'
const prepareObj = (sectors, index) => {
    return sectors.reduce((acc, sector) => {
        const rtn = data[sector][index];
        if (!rtn) return acc;
        const tmp = {
            sector,
            rtn
        };
        return [...acc, tmp];
    }, []).sort((a, b) => (b.rtn - a.rtn))
};
const Row = ({ sectors, index }) => {
    const rows = prepareObj(sectors, index);
    return (
        <>
            {rows.map((row) => {
                return (
                    <>
                        <tr>
                            <td>{row.sector}</td>
                            <td>{row.rtn}</td>
                        </tr>
                    </>
                )
            })
            }
        </>
    )
    /* return (
         <>
             {sectors.reduce((acc, sector) => {
                 const dt = data[sector][index];
                 if (!dt) return acc;
                 const row = (
                     <>
                         <tr>
                             <td>{sector}</td>
                             <td>{dt}</td>
                         </tr>
                     </>
                 );
                 return [...acc, row]
             }, [])}
         </>
     )*/
}
const Tbl = (props) => {
    return (
        <table>
            <thead>
                <th>Sectors</th>
                <th>Return</th>
            </thead>
            <tbody>
                <Row {...props} />
            </tbody>
        </table>
    )
}
const Stats = () => {
    const sectors = Object.keys(data);
    console.log(sectors)
    return (
        <>
            <StatsContainer>
                {Array.from({ length: 23 }, (_, index) => {
                    return (
                        <StatsItem>
                            <h3>{index}</h3>
                            <Tbl
                                sectors={sectors}
                                index={index}
                            />
                        </StatsItem>
                    )
                })}
            </StatsContainer>
        </>
    )
}

export default Stats;