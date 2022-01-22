import styled from 'styled-components';
const PositionContainer = styled.div`
    display:flex;
    gap:4px;
    .positionItem{
        border:0.5px solid gray;
        min-width:12px;
        font-size:11px;
        color:white;
        font-weight:bold;
    }
    .positionItem:nth-child(-n+6){
        border-radius:50%;
    }
    .good{
        background:green;
    }
    .avg{
        background:tomato;
        color:white;
    }
    .invalid{
        background:black;
    }
`;

export {
    PositionContainer
}