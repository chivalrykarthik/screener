import styled from 'styled-components';


const Container = styled.div`
margin:${props => props.showChart ? "0" : "0 40px 40px 40px"};
position: relative;
`;

const Header = styled.div`
display: flex;
justify-content:space-between;
margin: 10px 40px 10px 40px;
font-weight:bold;
`;
export {
    Container,
    Header
}