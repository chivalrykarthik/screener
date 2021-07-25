import logo from './logo.svg';
import './App.css';
import Txt from './Txt';
import Filters from './Filters';
import { useState } from 'react';
import Tbl from './Tbl';
import PercentageDiff from './PercentageDiff';
import { Container } from './Styles/Container'
function App() {
  const [txt, setTxt] = useState('');
  const [stocks, setStocks] = useState([]);
  const [filtersList, setFilters] = useState([]);
  const [searchParams, setSearch] = useState({});
  const [filtersCnt, setFiltersCnt] = useState(0);
  const updFilter = (key, col, value) => {
    const tmp = [...filtersList];
    tmp[key][col] = value;
    setFilters(tmp);
  }

  const addToSearch = (filters) => {
    let cnt = 0;
    const searchObj = filters.reduce((acc, val) => {
      if (val.checked) {
        cnt++;
        let tmp = {
          [val.label]: {
            value: val.value,
            operator: val.operator,
          }
        };
        return { ...acc, ...tmp };
      }
      return acc;
    }, {});
    setFiltersCnt(cnt);
    setSearch(searchObj);
  }

  const createFilters = (stocks) => {
    if (stocks?.length) {
      const firstRow = Object.keys(stocks[0].filters);
      const tmpFilters = firstRow.map((key) => {
        return {
          label: key,
          value: '',
          operator: '',
          checked: false
        }
      });
      setFilters(tmpFilters);
    } else {
      setFilters([]);
    }
  }

  const parseStocks = () => {
    try {
      let tmpStocks = JSON.parse(txt);
      if (!Array.isArray(tmpStocks)) { tmpStocks = [tmpStocks] }
      setStocks(tmpStocks);
      createFilters(tmpStocks);
    } catch (e) {
      alert("Invlaid JSON")
    }
  }

  const deleteStock = (key) => {
    const newStocks = [...stocks.slice(0, key), ...stocks.slice(key + 1)]
    setStocks(newStocks);
  }
  return (
    <Container>

      <Txt value={txt} setVal={setTxt} onSubmit={parseStocks} />
      {stocks && stocks.length > 0 && <Filters filtersList={filtersList} updFilter={updFilter} addToSearch={addToSearch} />}
      {stocks && stocks.length > 0 && <h5>Filters added: {filtersCnt}</h5>}
      {stocks && stocks.length > 0 && <Tbl stocks={stocks} searchParams={searchParams} deleteStock={deleteStock} />}
      <PercentageDiff />
    </Container>
  );
}

export default App;
