import styled from 'styled-components';


const Container = styled.div`
    
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
`;

const Prds = styled.div`    
    display:flex;
    width:100%;
    height:auto;
    @media screen and (max-width: 700px) {
        flex-direction:column;
    }
`;

const Prd = styled.div`
    border:1px solid grey;    
    margin:5px;
    width:500px;
    max-width:50%;
    padding:5px;    
    
    position:relative;
`;

const Title = styled.div`
    font-weight:bold;
`;

const Details = styled.div`
    font-size:12px;
    font-weight:bold;
    font-color:grey;
`;

const ToolTip = styled.div`
border:1px solid grey;    
margin:5px;
width:500px;
max-width:50%;
height:auto;
padding:5px; 
transition: opacity 5s; 
left:80%;

z-index:11;
background:white;

@media screen and (min-width: 701px) {    
   top:0;
   position:absolute;
}

@media screen and (max-width: 700px) {
    border:1px solid red;
    left:0;
   width:inherit;
    bottom:0;
    overflow:auto;
    margin:10px;
    padding:0;
    position:fixed;
}
&
.animate{
    animation: moveall .3s;
    @media screen and (max-width: 700px) {
        animation: movebottom .3s;
    }
}
@keyframes moveall {
    0%   {top:100%;}
    100% {top:0;}
  }
@keyframes movebottom {
    0%   {bottom:-100%;}
    100% {bottom:0;}
  }
`;
export {
    Container,
    Prds,
    Prd,
    Title,
    Details,
    ToolTip
}