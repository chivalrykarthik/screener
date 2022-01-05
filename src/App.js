import { useState } from 'react';
import './App.css';
import { Container, Header } from './Styles/Container'
import { Provider } from './store';

import Screener from './Screener';
import Charts from './charts';
function App() {
  const [showChart, setChart] = useState(false);
  const handleChart = () => {
    setChart(!showChart);
  }
  return (
    <>
      <Header>
        <div>
          <button onClick={handleChart} >Show Chart</button>
        </div>
        <div>v1.7.0</div>
      </Header>
      <Container showChart={showChart}>
        {showChart ? <Charts /> : <Screener />}


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