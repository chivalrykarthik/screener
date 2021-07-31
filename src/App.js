import './App.css';
import Txt from './Txt';
import Filters from './Filters';
import Tbl from './Tbl';
import PercentageDiff from './PercentageDiff';
import { Container } from './Styles/Container'
import { Provider, useStore } from './store';

function App() {
  const [store] = useStore();
  return (
    <Container>
      <Txt />
      {store.stocks && store.stocks.length > 0 && <Filters />}
      {store.stocks && store.stocks.length > 0 && <h5>Filters added: {store.filtersCnt}</h5>}
      {store.stocks && store.stocks.length > 0 && <Tbl />}
      <PercentageDiff />
    </Container>
  );
}


export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};