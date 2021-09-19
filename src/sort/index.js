import { useState } from 'react';
import { useStore } from './../store';
import TblView from './../view/TblView';

import { ModalContainer, ModalBody, ModalClose, Content } from './../bestPick/Style';

const sortStocks = (stocks) => {
    return stocks.sort((a, b) => {
        return b.filters.ROE - a.filters.ROE || b.filters.ROCE - a.filters.ROCE || b.filters.ROEPrevAnn - a.filters.ROEPrevAnn || b.filters.ROCEPrevYr - a.filters.ROCEPrevYr

            || b.filters.Salesgrowth - a.filters.Salesgrowth || b.filters.QtrSalesVar - a.filters.QtrSalesVar


            || b.filters.OPM - a.filters.OPM || b.filters.OPMAnn - a.filters.OPMAnn || b.filters.OPMPrevAnn - a.filters.OPMPrevAnn || b.filters.OPMQtr - a.filters.OPMQtr || b.filters.OPMPrevQtr - a.filters.OPMPrevQtr || b.filters.OPMPYQtr - a.filters.OPMPYQtr

            || b.filters.NPMAnn - a.filters.NPMAnn || b.filters.NPMPrevAnn - a.filters.NPMPrevAnn || b.filters.NPMQtr - a.filters.NPMQtr || b.filters.NPMPrevQtr - a.filters.NPMPrevQtr || b.filters.NPMPYQtr - a.filters.NPMPYQtr

            || b.filters.EPS12M - a.filters.EPS12M || b.filters.EPSAnnRs - a.filters.EPSAnnRs || b.filters.EPSPrevAnnRs - a.filters.EPSPrevAnnRs || b.filters.EPSQtrRs - a.filters.EPSQtrRs || b.filters.EPSPrevQtrRs - a.filters.EPSPrevQtrRs || b.filters.EPSPYQtrRs - a.filters.EPSPYQtrRs

            || a.filters['Debt to Eq'] - b.filters['Debt to Eq']
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