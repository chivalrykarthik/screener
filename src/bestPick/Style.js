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
    overflow:hidden;
`;

const ModalBody = styled.div`
    position:relative;
    background:white;
    max-width:100%;
    max-height:100%;
    padding:5px;
    overflow:auto;
`;

const ModalClose = styled.div`
    position:absolute;
    top:0;
    right:0;
    padding:5px;
`;

const Content = styled.div`
    display:flex;
    flex-wrap: wrap;
    
    >
    div{
        margin:5px;
        max-width:20%;        
    }
    table tr th{
        position:relative;
    }
    
`;
export {
    ModalContainer,
    ModalBody,
    ModalClose,
    Content
}