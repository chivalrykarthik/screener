import styled from 'styled-components';


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
export {
    StatsContainer,
    StatsItem
}