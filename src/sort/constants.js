export const cols = {
    eps: { cols: ['EPSQtrRs', 'EPSPrevQtrRs', 'EPS12M', 'EPSAnnRs', 'EPSPrevAnnRs', 'EPSPYQtrRs'], order: 'desc' },
    npm: { cols: ['NPMAnn', 'NPMPrevAnn', 'NPMQtr', 'NPMPrevQtr', 'NPMPYQtr'], order: 'desc' },
    opm: { cols: ['OPM', 'OPMAnn', 'OPMPrevAnn', 'OPMQtr', 'OPMPrevQtr', 'OPMPYQtr'], order: 'desc' },
    sales: { cols: ['Salesgrowth', 'QtrSalesVar'], order: 'desc' },
    roe: { cols: ['ROE', 'ROEPrevAnn'], order: 'desc' },
    roce: { cols: ['ROCE', 'ROCEPrevYr'], order: 'desc' },
    cashFlow: { cols: ['FreeCashFlowRsCr', 'FCFPrevAnnRsCr'], order: 'desc' },
    debt: { cols: ['Debt to Eq'], order: 'asc' },
    pe: { cols: ['PERatio'], order: 'asc' },
    ey: { cols: ['EarningsYield'], order: 'desc' }
};
export const colsOrder = ['eps', 'npm', 'opm', 'sales', 'roe', 'roce', 'cashFlow', 'debt', 'pe', 'ey'];