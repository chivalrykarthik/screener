import {
    parseStocks,
    createFilters,
    getAvg,
    addToSearch,
    updFilter,
    updAvg,
    deleteStock,
    deleteStocks
} from './util';
export const initialState = {
    txt: '',
    highAvg: 100,
    lowAvg: 100,
    maxPer: 10,
    stocks: [],
    filtersList: [],
    average: {},
    searchParams: {},
    filtersCnt: 0,
    compare: []
};


export const reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
        case "ADD_TEXT":
            return { ...state, txt: data.txt };
        case "ADD_STOCKS":
            const stocks = parseStocks(state.txt);
            return {
                ...state, stocks: stocks, filtersList: [], filtersList: [],
                average: {},
                searchParams: {},
                filtersCnt: 0
            };
        case "ADD_FILTERS":
            const filters = createFilters(state.stocks);
            return { ...state, filtersList: filters };
        case "ADD_AVG":
            const avg = getAvg(state.stocks, state.maxPer, state.highAvg, state.lowAvg);
            return { ...state, average: avg };
        case "ADD_SEARCH":
            const { cnt, searchObj } = addToSearch(state.filtersList);
            return { ...state, searchParams: searchObj, filtersCnt: cnt };
        case "UPD_FILTERS":
            const updFilters = updFilter(state.filtersList, data.key, data.col, data.value);
            return { ...state, filtersList: updFilters };
        case "UPD_AVG":
            const updAverage = updAvg({ ...data, average: state.average });
            return { ...state, average: updAverage };
        case "DELETE_STOCK":
            const updStock = deleteStock(data.key, state.stocks);
            return { ...state, stocks: updStock };
        case "DELETE_STOCKS":
            const updStocks = deleteStocks(data.key, state.stocks);
            return { ...state, stocks: updStocks };
        case "UPD_HIGH_AVG":
            return { ...state, highAvg: data.value };
        case "UPD_LOW_AVG":
            return { ...state, lowAvg: data.value };
        case "UPD_MAX_PER":
            return { ...state, maxPer: data.value };
        case "UPD_STOCKS":
            return { ...state, stocks: data.stocks };
        case "ADD_TO_COMPARE":
            return { ...state, compare: data.compare };
        default:
            return state;
    }
}