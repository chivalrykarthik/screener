import { useMemo } from 'react';
import { PositionContainer } from './style';
const Position = ({ points }) => {
    const revPoints = useMemo(() => points.slice().reverse(), []);
    return (
        <>
            <PositionContainer>
                {
                    revPoints.map((point) => {
                        const className = point === 0 ? 'invalid' : point <= 6 ? 'good' : 'avg';
                        return (
                            <div className={`positionItem ${className}`}>{point}</div>
                        )
                    })
                }
            </PositionContainer>
        </>
    )

}

export default Position;