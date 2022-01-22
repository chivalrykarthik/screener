import data from './data.json';
import { StatsContainer, StatsItem } from './style'
import { prepareState } from './util';
import Tbl from './component/Tbl';



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
                                finalStat={finalStat}
                                isLast={index === 22}
                            />
                        </StatsItem>
                    )
                })}

            </StatsContainer>
        </>
    )
}

export default Stats;