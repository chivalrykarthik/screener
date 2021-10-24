export const cols = {
    eps: { cols: ['EPSQtrRs', 'EPSPrevQtrRs', 'EPS12M', 'EPSAnnRs', 'EPSPrevAnnRs', 'EPSPYQtrRs'], order: 'desc', isRound: true },
    npm: { cols: ['NPMAnn', 'NPMPrevAnn', 'NPMQtr', 'NPMPrevQtr', 'NPMPYQtr'], order: 'desc', isRound: true },
    opm: { cols: ['OPM', 'OPMAnn', 'OPMPrevAnn', 'OPMQtr', 'OPMPrevQtr', 'OPMPYQtr'], order: 'desc', isRound: true },
    sales: { cols: ['Salesgrowth', 'QtrSalesVar'], order: 'desc', isRound: true },
    roe: { cols: ['ROE', 'ROEPrevAnn'], order: 'desc', isRound: true },
    roce: { cols: ['ROCE', 'ROCEPrevYr'], order: 'desc', isRound: true },
    cashFlow: { cols: ['FreeCashFlowRsCr', 'FCFPrevAnnRsCr'], order: 'desc', isRound: true },
    debt: { cols: ['Debt to Eq'], order: 'asc', isRound: true },
    pe: { cols: ['PERatio'], order: 'asc', isRound: true },
    ey: { cols: ['EarningsYield'], order: 'desc', isRound: true },
    qqp: { cols: ['QoQProfits'], order: 'desc', isRound: true },
    qqs: { cols: ['QoQSales'], order: 'desc', isRound: true },
    yyp: { cols: ['QtrProfitVar'], order: 'desc', isRound: true },
    yys: { cols: ['QtrSalesVar'], order: 'desc', isRound: true },
    r: { cols: ['Rank'], order: 'asc', isRound: false },
    er: { cols: ['EarningsYieldRank'], order: 'asc', isRound: false },
    rr: { cols: ['ROCERank'], order: 'asc', isRound: false }
};
export const colsOrder = ['qqp', 'qqs', 'yyp', 'yys', 'eps', 'npm', 'opm', 'sales', 'roe', 'roce', 'cashFlow', 'debt', 'pe', 'ey'];

export const rankCols = ['EarningsYield', 'ROCE'];