import { useState } from 'react';
import { useStore } from './../store';
import TblView from './../view/TblView';
import { cols, colsOrder, rankCols } from './constants'
import { ModalContainer, ModalBody, ModalClose, Content } from './../bestPick/Style';


const round5 = (num) => {
    if (!num) num = 0;
    let n = num < 0 ? Math.abs(num) : Number(num);
    const diff = n % 5;
    const res = diff >= 3 ? n + (5 - diff) : n - diff;
    const a = num < 0 ? Number(-res) : Number(res);
    return a;
}

const addRank = (store, rankCols) => {
    const fields = rankCols;
    const asc = (v1, v2) => parseFloat(v1) - parseFloat(v2);
    const desc = (v1, v2) => parseFloat(v2) - parseFloat(v1);
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i].split('#');
        const col = field[0];
        const isAsc = field.length > 1 ? true : false;
        store.stocks.sort((a, b) => isAsc && a.filters[col] > 0 && b.filters[col] > 0 ? asc(a.filters[col], b.filters[col]) : desc(a.filters[col], b.filters[col]));
        for (let i = 0; i < store.stocks.length; i++) {
            store.stocks[i].filters['Rank'] = (store.stocks[i].filters['Rank'] || 0) + (i + 1);
            store.stocks[i].filters[col + 'Rank'] = i + 1;
        }
    }

    return store;
}

const sortStocks = (stocks, sortByCol, avg) => {
    const asc = (v1, v2, isRound) => isRound ? round5(v1) - round5(v2) : v1 - v2;
    const desc = (v1, v2, isRound) => isRound ? round5(v2) - round5(v1) : v2 - v1;

    return stocks.sort((a, b) => {
        const res = sortByCol.map((colOrder) => {
            const colList = cols[colOrder];
            return colList.cols.map((col) => {
                if (avg[col]
                    && (avg[col].rm.includes(parseFloat(a.filters[col])) || avg[col].rm.includes(parseFloat(b.filters[col])))) {
                    return 0;
                }
                if (colList.order === "asc") {
                    return asc(a.filters[col], b.filters[col]);
                } else {
                    return desc(a.filters[col], b.filters[col]);
                }
            }).join('||');

        }).join('||');

        return eval(res);
    });
}

const SortedStocks = () => {
    const [openSort, setSort] = useState(false);
    const [sortList, setSortList] = useState(colsOrder);
    const [sortBy, setSortBy] = useState(colsOrder);
    const [rankList, setRankList] = useState(rankCols);
    const [rankBy, setRankBy] = useState(rankCols);
    const [store] = useStore();
    const tmpStore = JSON.parse(JSON.stringify(store));
    const stocksRank = addRank(tmpStore, rankBy);
    const stocks = sortStocks(stocksRank.stocks, sortBy, stocksRank.average);
    const handleChange = e => setSortList(e.target.value);
    const handleRank = e => setRankList(e.target.value);
    const onSort = () => setSortBy(Array.isArray(sortList) ? sortList : sortList.split(','));
    const onRank = () => setRankBy(Array.isArray(rankList) ? rankList : rankList.split(','));
    return (
        <>
            <button onClick={e => setSort(!openSort)} >Sort</button>
            {
                openSort && (<ModalContainer>
                    <ModalBody>
                        <ModalClose onClick={e => setSort(!openSort)} >X</ModalClose>
                        <Content>
                            <div>
                                <input type="text" value={sortList} onChange={handleChange} /> <button onClick={onSort} >Sort</button>
                                <input type="text" value={rankList} onChange={handleRank} /> <button onClick={onRank} >Rank</button>
                                <TblView
                                    average={stocksRank.average}
                                    stocks={stocks}
                                    dispatch={() => { }}
                                    filtersCnt={stocksRank.filtersCnt}
                                    searchParams={stocksRank.searchParams}
                                    compare={stocksRank.compare}
                                />
                            </div>
                        </Content>
                    </ModalBody>
                </ModalContainer>)
            }
        </>
    )
}

export default SortedStocks;
