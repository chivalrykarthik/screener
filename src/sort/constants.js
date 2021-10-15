export const cols = {
    eps: { cols: ['EPSQtrRs', 'EPSPrevQtrRs', 'EPS12M', 'EPSAnnRs', 'EPSPrevAnnRs', 'EPSPYQtrRs'], order: 'desc' },
    npm: { cols: ['NPMAnn', 'NPMPrevAnn', 'NPMQtr', 'NPMPrevQtr', 'NPMPYQtr'], order: 'desc' },
    opm: { cols: ['OPM', 'OPMAnn', 'OPMPrevAnn', 'OPMQtr', 'OPMPrevQtr', 'OPMPYQtr'], order: 'desc' },
    sales: { cols: ['Salesgrowth', 'QtrSalesVar'], order: 'desc' },
    roe: { cols: ['ROE', 'ROCE', 'ROEPrevAnn', 'ROCEPrevYr'], order: 'desc' },
    cashFlow: { cols: ['FreeCashFlowRsCr', 'FCFPrevAnnRsCr'], order: 'desc' },
    debt: { cols: ['Debt to Eq'], order: 'asc' },
    pe: { cols: ['PERatio'], order: 'asc' }
};
export const colsOrder = ['eps', 'npm', 'opm', 'sales', 'roe', 'cashFlow', 'debt', 'pe'];