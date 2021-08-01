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
                checked: false,
                exclude: []
            }
        });
        return tmpFilters;
    } else {
        return [];
    }
}

export const getAvg = (stocks, hightAvg, lowAvg) => {
    if (Array.isArray(stocks) && stocks?.length) {
        let avg = {};
        let valueAr = {};
        stocks.forEach(stock => {
            const { filters } = stock;
            Object.keys(filters).forEach(filter => {
                const val = parseFloat(avg[filter]?.val || 0) + parseFloat(filters[filter] || 0);
                const len = filters[filter] != '' ? (avg[filter]?.len || 0) + 1 : avg[filter]?.len;
                if (filters[filter] != '') {
                    valueAr[filter] = (valueAr[filter] || []).concat(parseFloat(filters[filter]));
                }
                avg[filter] = { val, len };
            });
        });
        Object.keys(valueAr).forEach(filter => {
            valueAr[filter].sort((a, b) => a - b);
            const rm = removeOddVal(valueAr[filter], hightAvg, lowAvg);
            rm.forEach(val => {
                avg[filter].val -= val
                avg[filter].len--;
            });
            avg[filter].rm = rm;

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
    return tmp;
}

export const deleteStock = (key, stocks) => {
    const newStocks = [...stocks.slice(0, key), ...stocks.slice(key + 1)]
    return newStocks;
};

export const findPerDiff = (newNum, orgNum) => {
    return ((newNum - orgNum) / orgNum) * 100;
}
export const removeOddVal = (value, highAvg, lowAvg, rm = [], mid = 0) => {
    if (value.length) {
        const midPostion = Math.round(value.length / 2);
        const midEle = mid || value[midPostion];
        const firstEle = value[0];
        const lastEle = value[value.length - 1];
        const lastDiff = findPerDiff(lastEle, midEle);
        const firstDiff = findPerDiff(firstEle, midEle);
        if (lastDiff > highAvg) {
            const newValue = value.pop();
            rm.push(newValue);
            return removeOddVal(value, highAvg, lowAvg, rm, midEle);
        } else if (firstDiff < lowAvg) {
            const newValue = value.shift();
            rm.push(newValue);
            return removeOddVal(value, highAvg, lowAvg, rm, midEle);
        } else {
            return rm;
        }
    }
}