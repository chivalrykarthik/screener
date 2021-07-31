import {
    parseStocks,
    createFilters,
    getAvg,
    addToSearch,
    updFilter,
    updAvg,
    deleteStock
} from './util';
export const initialState = {
    txt: '',
    stocks: [],
    filtersList: [],
    average: {},
    searchParams: {},
    filtersCnt: 0
};


export const reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
        case "ADD_TEXT":
            return { ...state, txt: data.txt };
        case "ADD_STOCKS":
            const stocks = parseStocks(state.txt);
            return { ...state, stocks: stocks };
        case "ADD_FILTERS":
            const filters = createFilters(state.stocks);
            return { ...state, filtersList: filters };
        case "ADD_AVG":
            const avg = getAvg(state.stocks);
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
            const updStocks = deleteStock(data.key, state.stocks);
            return { ...state, stocks: updStocks };
        default:
            return state;
    }
}