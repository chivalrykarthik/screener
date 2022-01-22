import styled, { css } from 'styled-components';


const StatsContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    gap:5px;
`;

const StatsItem = styled.div`
    max-width:15%;
    
`;

const PositionContainer = styled.div`
    display:flex;
    gap:4px;    
    .positionItem{
        border:0.5px solid grey;        
        min-width:12px;
        font-size:11px;
        color:white;
        background:tomato;
        font-weight:bold;
    }
    .positionItem:first-child{
        background:green;
        
        
    }
    .positionItem:nth-child(-n+3){
        background:green;
        color:white;
    }
    .invalid{
        background:black;
    }
`;
export {
    StatsContainer,
    StatsItem,
    PositionContainer
}