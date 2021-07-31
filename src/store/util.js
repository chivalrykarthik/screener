export const parseStocks = (txt) => {
    try {
        let tmpStocks = JSON.parse(txt);
        if (!Array.isArray(tmpStocks)) { tmpStocks = [tmpStocks] }
        return tmpStocks;
    } catch (e) {
        alert("Invlaid JSON")
    }
}

export const createFilters = (stocks) => {
    if (stocks?.length) {
        const firstRow = Object.keys(stocks[0].filters);
        const tmpFilters = firstRow.map((key) => {
            return {
                label: key,
                value: '',
                operator: '',
                checked: false
            }
        });
        return tmpFilters;
    } else {
        return [];
    }
}

export const getAvg = (stocks) => {
    if (Array.isArray(stocks) && stocks?.length) {
        let avg = {};
        stocks.forEach(stock => {
            const { filters } = stock;
            Object.keys(filters).forEach(filter => {
                avg[filter] = { val: parseFloat(avg[filter]?.val || 0) + parseFloat(filters[filter] || 0), len: stocks.length };
            });
        });
        return avg;
    }
}

export const addToSearch = (filters) => {
    let cnt = 0;
    const searchObj = filters.reduce((acc, val) => {
        if (val.checked) {
            cnt++;
            let tmp = {
                [val.label]: {
                    value: val.value,
                    operator: val.operator,
                }
            };
            return { ...acc, ...tmp };
        }
        return acc;
    }, {});
    return {
        cnt,
        searchObj
    };
}

export const updFilter = (filtersList, key, col, value) => {
    const tmp = [...filtersList];
    tmp[key][col] = value;
    return tmp;
}

export const updAvg = ({ updType, filter, num, average }) => {
    const parseNum = parseFloat(num) || 0;
    let tmp = JSON.parse(JSON.stringify(average));
    tmp[filter].val = updType === 'sub' ? (tmp[filter].val - (parseNum)) : (parseFloat(tmp[filter].val) + parseNum);
    tmp[filter].len = updType === 'sub' ? (tmp[filter].len - 1) : (parseFloat(tmp[filter].len) + 1);
    //setAverage(tmp);
    return tmp;
}

export const deleteStock = (key, stocks) => {
    const newStocks = [...stocks.slice(0, key), ...stocks.slice(key + 1)]
    return newStocks;
};