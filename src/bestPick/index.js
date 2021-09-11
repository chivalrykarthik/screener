import { useStore } from './../store';
import { useState } from 'react';
import { ModalContainer, ModalBody, ModalClose, Content } from './Style'
const findBest = (stocks, type) => {
    const sortRoe = stocks.sort((a, b) => {
        return parseFloat(b.filters[type]) - parseFloat(a.filters[type]);
    });
    return sortRoe.slice(0, 5);
}
const findMaxMatch = (...arr) => {
    return arr.reduce((acc, val, key) => {
        const position = (key + 1) % 5;
        const avgPos = position === 0 ? 5 : position;
        if (acc[val.Name]) {
            acc[val.Name].cnt += 1;
            acc[val.Name].avgPos += avgPos;
            acc[val.Name].t.push(avgPos);
        } else {
            acc[val.Name] = { cnt: 1, avgPos: avgPos, t: [position], name: val.Name };
        }
        return acc;
    }, {});
}

const sortByBest = (maxMatch) => {
    const matches = Object.values(maxMatch);
    return matches.sort(function (a, b) {
        return b.cnt - a.cnt || a.avgPos - b.avgPos;
    }).slice(0, 5);
}
const calc = (stocks) => {
    const parseStocks = JSON.parse(JSON.stringify(stocks));

    //Current
    const roe = findBest(parseStocks, 'ROE');
    const roce = findBest(parseStocks, 'ROCE');
    const eps = findBest(parseStocks, 'EPS12M');
    const saleGrowth = findBest(parseStocks, 'Salesgrowth');
    const qtrSalesVar = findBest(parseStocks, 'QtrSalesVar'); // yoySales growth

    const currentMatch = findMaxMatch(
        ...roe,
        ...roce,
        ...eps,
        ...saleGrowth,
        ...qtrSalesVar
    );
    const currentBest = sortByBest(currentMatch);

    //History prev
    const roePrevAnn = findBest(parseStocks, 'ROEPrevAnn');
    const rocePrevYr = findBest(parseStocks, 'ROCEPrevYr');
    const epsPreAn = findBest(parseStocks, 'EPSPrevAnnRs');
    const epsAnn = findBest(parseStocks, 'EPSAnnRs'); // eps last year
    const historyMatch = findMaxMatch(
        ...roePrevAnn,
        ...rocePrevYr,
        ...epsPreAn,
        ...epsAnn
    );
    const histBest = sortByBest(historyMatch);

    //EPS
    const epsQtr = findBest(parseStocks, 'EPSQtrRs'); // latest qtr
    const epsPQtr = findBest(parseStocks, 'EPSPYQtrRs'); // preceding year qtr
    const epsMatch = findMaxMatch(
        ...epsQtr,
        ...epsPQtr
    );
    const epsBest = sortByBest(epsMatch);

    //3Year avg
    const roe3 = findBest(parseStocks, 'ROE3Yr');
    const roce3 = findBest(parseStocks, 'ROCE3Yr');
    const sales3 = findBest(parseStocks, 'SalesVar3Yrs');
    const avg3Match = findMaxMatch(
        ...roe3,
        ...roce3,
        ...sales3
    );
    const avg3Best = sortByBest(avg3Match);

    //5Year avg
    const roe5 = findBest(parseStocks, 'ROE5Yr');
    const roce5 = findBest(parseStocks, 'ROCE5Yr');
    const sales5 = findBest(parseStocks, 'SalesVar5Yrs');
    const avg5Match = findMaxMatch(
        ...roe5,
        ...roce5,
        ...sales5
    );
    const avg5Best = sortByBest(avg5Match);

    return {
        currentBest,
        histBest,
        epsBest,
        avg3Best,
        avg5Best
    };

    //5Year avg
    // Historic growth
    // sales roe roce, cash
}
const Tbl = ({ rows }) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cnt</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => {
                    return (
                        <>
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.cnt}</td>
                                <td>{row.avgPos}</td>
                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
    )
}
const BestPick = () => {
    const [openBestPick, setBestPic] = useState(false);
    const [store] = useStore();
    const {
        currentBest,
        histBest,
        epsBest,
        avg3Best,
        avg5Best
    } = calc(store.stocks);

    return (
        <>
            <button onClick={e => setBestPic(!openBestPick)} >BestPick</button>
            {
                openBestPick && (<ModalContainer>
                    <ModalBody>
                        <ModalClose onClick={e => setBestPic(!openBestPick)} >X</ModalClose>
                        <Content>
                            <div>
                                <h5>Current</h5>
                                <Tbl rows={currentBest} />
                            </div>
                            <div>
                                <h5>History</h5>
                                <Tbl rows={histBest} />
                            </div>
                            <div>
                                <h5>Avg 3 Years</h5>
                                <Tbl rows={avg3Best} />
                            </div>
                            <div>
                                <h5>Avg 5 Years</h5>
                                <Tbl rows={avg5Best} />
                            </div>
                            <div>
                                <h5>Eps</h5>
                                <Tbl rows={epsBest} />
                            </div>
                        </Content>
                    </ModalBody>

                </ModalContainer>)
            }
        </>
    )
}

export default BestPick;