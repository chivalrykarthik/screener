import styled from 'styled-components';

const ModalContainer = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    right:0;
    left:0;
    top:0;
    z-index:1000;
    background:rgb(0, 0, 0, 0.4);
    display:flex;
    justify-content:center;
    align-items:center;    
`;

const ModalBody = styled.div`
    position:relative;
    background:white;
    width:auto;
    height:auto;
    padding:5px;

`;

const ModalClose = styled.div`
    position:absolute;
    top:0;
    right:0;
    padding:5px;
`;

const Content = styled.div`
    display:flex;
    >
    div{
        margin:5px;
    }
    
`;
export {
    ModalContainer,
    ModalBody,
    ModalClose,
    Content
}