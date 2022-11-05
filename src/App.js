import { useState } from 'react';
import './App.css';
import { Container, Header } from './Styles/Container'
import { Provider } from './store';

import Screener from './Screener';
import Charts from './charts';
import Fp from './fp';
function App() {
  const [showChart, setChart] = useState(false);
  const [showFp, setFp] = useState(false);
  const handleChart = () => {
    setChart(!showChart);
  }
  const handleFP = () => {
    setFp(!showFp);
  }
  return (
    <>
      <Header>
        <div>
          <button onClick={handleChart} >Show Chart</button> &nbsp;
		  <button onClick={handleFP} >FP</button>
        </div>
        <div>v2.1.25</div>
      </Header>
      <Container showChart={showChart || showFp}>
        {showChart ? <Charts /> : showFp ? <Fp />: <Screener />}		
      </Container>	  
    </>
  );
}


export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};