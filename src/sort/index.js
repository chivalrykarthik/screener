import { useState } from 'react';
import { useStore } from './../store';
import TblView from './../view/TblView';
import { cols, colsOrder } from './constants'
import { ModalContainer, ModalBody, ModalClose, Content } from './../bestPick/Style';


const round5 = (num) => {
    if (!num) num = 0;
    let n = num < 0 ? Math.abs(num) : Number(num);
    const diff = n % 5;
    const res = diff >= 3 ? n + (5 - diff) : n - diff;
    const a = num < 0 ? Number(-res) : Number(res);
    return a;
}

const sortStocks = (stocks, sortByCol, avg) => {
    const asc = (v1, v2) => round5(v1) - round5(v2);
    const desc = (v1, v2) => round5(v2) - round5(v1);

    return stocks.sort((a, b) => {
        const res = sortByCol.map((colOrder) => {
            const colList = cols[colOrder];
            return colList.cols.map((col) => {
                if (avg[col]
                    && (avg[col].rm.includes(parseFloat(a.filters[col])) || avg[col].rm.includes(parseFloat(b.filters[col])))) {
                    console.log("col-====" + col + "vala===" + a.filters[col] + "valb===" + a.filters[col])
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
    const [store] = useStore();
    const tmpStore = JSON.parse(JSON.stringify(store));
    const stocks = sortStocks(tmpStore.stocks, sortBy, tmpStore.average);
    const handleChange = e => setSortList(e.target.value);
    const onSort = () => {
        setSortBy(sortList.split(','));
    }
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
                                <TblView
                                    average={tmpStore.average}
                                    stocks={stocks}
                                    dispatch={() => { }}
                                    filtersCnt={tmpStore.filtersCnt}
                                    searchParams={tmpStore.searchParams}
                                    compare={tmpStore.compare}
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
