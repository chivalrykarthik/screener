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

export const getAvg = (stocks, maxPer = 10, hightAvg = 100, lowAvg = 100) => {
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
            const rm = removeOddVal(valueAr[filter], maxPer, hightAvg, lowAvg);
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
/*export const removeOddVal = (value, highAvg, lowAvg, rm = [], mid = 0) => {
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
}*/
const findPercentage = (values) => {
    return values.reduce((acc, val, key) => {
        let tmp = {
            diff: 0,
            val
        };
        if (key === 0) return [tmp];
        tmp.diff = findPerDiff(val, values[key - 1]);
        return [...acc, tmp];
    }, []);


}
export const removeOddVal = (arr, maxPer = 10, highAvg = 100, lowAvg = 100) => {
    arr.sort((a, b) => a - b)
    const len = arr.length;
    const max = Math.ceil((len / 100) * maxPer);
    const firstChunk = arr.slice(0, max).reverse();
    const lastChunk = arr.slice(len - max);
    const firstPercentage = findPercentage(firstChunk);
    const lastPercentage = findPercentage(lastChunk);
    const firstPos = firstPercentage.findIndex(fp => fp.diff > lowAvg);
    const lastPos = lastPercentage.findIndex(fp => fp.diff > highAvg);

    const rm = [
        ...(firstPos > -1 ? firstChunk.slice(firstPos) : []),
        ...(lastPos > -1 ? lastChunk.slice(lastPos) : [])
    ]
    return rm;
}

/*
const ar = [-493.44, -133.71, -73.03, -34.41, -11.89, -9.83, -8.48, -4.61,
            -2.71, -1.33, 0.01, 0.1, 1.61, 1.88, 2.36, 2.38, 2.51, 2.58, 3.41, 5.94,
            6.48, 7.58, 9.68, 10.03, 10.51, 12.99, 13.26, 13.67, 15.16, 19.12, 21.65,
            25.86]
Find length of array
    - get per from store
    - get first 10 per
        - calc percentage interval
        - if it exceeds to -100 then skip remaining
        - add skip num to rm
    - get last 10 per
        - calc percentage interval
        - if it exceeds to 100 then skip remaining
        - add skip num to rm

*/