import { useState } from 'react';
import './App.css';
import Txt from './Txt';
import Filters from './Filters';
import Tbl from './Tbl';
import PercentageDiff from './PercentageDiff';
import { useStore } from './store';
import Modal from './modal';
import BestPick from './bestPick';
import SortedStocks from './sort';
function Screener() {
    const [store] = useStore();
    const [isModalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(!isModalOpen);
    }

    return (
        <>
            <Txt />
            {store.stocks && store.stocks.length > 0 && <Filters />}
            {store.stocks && store.stocks.length > 0 && <h5>Filters added: {store.filtersCnt}</h5>}
            {store.compare && store.compare.length > 1 && <button onClick={showModal} >Compare</button>}
            {store.stocks && store.stocks.length > 0 && <BestPick />}
            {store.stocks && store.stocks.length > 0 && <SortedStocks />}
            {store.stocks && store.stocks.length > 0 && <Tbl />}
            {isModalOpen && <Modal showModal={showModal} />}
            <PercentageDiff />

        </>
    );
}


export default Screener;