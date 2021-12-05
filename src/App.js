import { useState } from 'react';
import './App.css';
import Txt from './Txt';
import Filters from './Filters';
import Tbl from './Tbl';
import PercentageDiff from './PercentageDiff';
import { Container, Header } from './Styles/Container'
import { Provider, useStore } from './store';
import Modal from './modal';
import BestPick from './bestPick';
import SortedStocks from './sort';
function App() {
  const [store] = useStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(!isModalOpen);
  }

  return (
    <>
      <Header>

        <div>v1.1</div>
      </Header>
      <Container>
        <Txt />
        {store.stocks && store.stocks.length > 0 && <Filters />}
        {store.stocks && store.stocks.length > 0 && <h5>Filters added: {store.filtersCnt}</h5>}
        {store.compare && store.compare.length > 1 && <button onClick={showModal} >Compare</button>}
        {store.stocks && store.stocks.length > 0 && <BestPick />}
        {store.stocks && store.stocks.length > 0 && <SortedStocks />}
        {store.stocks && store.stocks.length > 0 && <Tbl />}
        {isModalOpen && <Modal showModal={showModal} />}

        <PercentageDiff />
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