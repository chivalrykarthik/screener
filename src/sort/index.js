import { useState } from 'react';
import { useStore } from './../store';
import TblView from './../view/TblView';

import { ModalContainer, ModalBody, ModalClose, Content } from './../bestPick/Style';


const round5 = (num) => {
    if (!num) num = 0;
    let n = num < 0 ? Math.abs(num) : Number(num);
    const diff = n % 5;
    const res = diff >= 3 ? n + (5 - diff) : n - diff;
    const a = num < 0 ? Number(-res) : Number(res);
    console.log(num + "===" + a)
    return a;
}

const sortStocks = (stocks) => {
    return stocks.sort((a, b) => {
        return round5(b.filters.NPMAnn) - round5(a.filters.NPMAnn) || round5(b.filters.NPMPrevAnn) - round5(a.filters.NPMPrevAnn) || round5(b.filters.NPMQtr) - round5(a.filters.NPMQtr) || round5(b.filters.NPMPrevQtr) - round5(a.filters.NPMPrevQtr) || round5(b.filters.NPMPYQtr) - round5(a.filters.NPMPYQtr)

            || round5(b.filters.OPM) - round5(a.filters.OPM) || round5(b.filters.OPMAnn) - round5(a.filters.OPMAnn) || round5(b.filters.OPMPrevAnn) - round5(a.filters.OPMPrevAnn) || round5(b.filters.OPMQtr) - round5(a.filters.OPMQtr) || round5(b.filters.OPMPrevQtr) - round5(a.filters.OPMPrevQtr) || round5(b.filters.OPMPYQtr) - round5(a.filters.OPMPYQtr)


            || round5(b.filters.Salesgrowth) - round5(a.filters.Salesgrowth) || round5(b.filters.QtrSalesVar) - round5(a.filters.QtrSalesVar)

            || round5(b.filters.EPS12M) - round5(a.filters.EPS12M) || round5(b.filters.EPSAnnRs) - round5(a.filters.EPSAnnRs) || round5(b.filters.EPSPrevAnnRs) - round5(a.filters.EPSPrevAnnRs) || round5(b.filters.EPSQtrRs) - round5(a.filters.EPSQtrRs) || round5(b.filters.EPSPrevQtrRs) - round5(a.filters.EPSPrevQtrRs) || round5(b.filters.EPSPYQtrRs) - round5(a.filters.EPSPYQtrRs)

            || round5(b.filters.ROE) - round5(a.filters.ROE) || round5(b.filters.ROCE) - round5(a.filters.ROCE) || round5(b.filters.ROEPrevAnn) - round5(a.filters.ROEPrevAnn) || round5(b.filters.ROCEPrevYr) - round5(a.filters.ROCEPrevYr)


            || round5(a.filters['Debt to Eq']) - round5(b.filters['Debt to Eq'])



    })
}
const SortedStocks = () => {
    const [openSort, setSort] = useState(false);
    const [store] = useStore();
    const tmpStore = JSON.parse(JSON.stringify(store));
    const stocks = sortStocks(tmpStore.stocks);
    return (
        <>
            <button onClick={e => setSort(!openSort)} >Sort</button>
            {
                openSort && (<ModalContainer>
                    <ModalBody>
                        <ModalClose onClick={e => setSort(!openSort)} >X</ModalClose>
                        <Content>
                            <div>
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