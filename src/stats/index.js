import { useMemo } from 'react';
import data from './data.json';
import { StatsContainer, StatsItem, PositionContainer } from './style'
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
const prepareState = (sectors) => {
    let res = {};
    Array.from({ length: 23 }, (_, index) => {
        const obj = prepareObj(sectors, index);
        sectors.forEach((sector) => {
            const tmp = (obj.findIndex(v => v.sector === sector) + 1);
            res[sector] = (res[sector] || []).concat(tmp);
        });
    });
    return res;
}
const Position = ({ points }) => {
    const revPoints = useMemo(() => points.slice().reverse(), []);
    return (
        <>
            <PositionContainer>
                {
                    revPoints.map((point) => {
                        return (
                            <div className={`positionItem ${!point ? 'invalid' : ''}`}>{point}</div>
                        )
                    })
                }
            </PositionContainer>
        </>
    )

}

const FinalStat = ({ finalStat }) => {
    return (
        <>
            <table>
                <thead>
                    <th>Sector</th>
                    <th>Position</th>
                </thead>
                <tbody>
                    {
                        finalStat.map((stat) => {
                            const [sector, pos] = stat;
                            return (
                                <>
                                    <tr>
                                        <td>{sector}</td>
                                        <td><Position points={pos} /></td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
};
const Stats = () => {
    const sectors = Object.keys(data);
    const finalStat = Object.entries(prepareState(sectors));

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
                <StatsItem>
                    <h3>Stat</h3>
                    <FinalStat finalStat={finalStat} />
                </StatsItem>
            </StatsContainer>
        </>
    )
}

export default Stats;