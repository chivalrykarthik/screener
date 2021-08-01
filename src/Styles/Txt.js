import styled from 'styled-components';


const TextArea = styled.textarea`
    height:100px;
`;

const Button = styled.button`
    width:10%;
    margin:10px 0 0 0;    
`;

const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

const Avg = styled.div`
margin: 5px 0 0 0;
input{
    margin:0 5px 0 5px;
}
label{
    font-weight:bold;
    font-size:0.9rem;
}

`;
export {
    TextArea,
    Button,
    Header,
    Avg
}