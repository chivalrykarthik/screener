import data from './data.json';
const prepareObj = (sectors, index, finalStat = []) => {
    return sectors.reduce((acc, sector) => {
        const rtn = data[sector][index];
        if (!rtn) return acc;
        const tmp = {
            position: finalStat.filter(stat => stat[0] === sector)[0],
            sector,
            rtn
        };
        return [...acc, tmp];
    }, []).sort((a, b) => (b.rtn - a.rtn))
};

const prepareState = (sectors) => {
    let res = {};
    Array.from({ length: 23 }, (_, index) => {
        const obj = prepareObj(sectors, index);
        sectors.forEach((sector) => {
            const tmp = (obj.findIndex(v => v.sector === sector) + 1);
            res[sector] = (res[sector] || []).concat(tmp);
        });
    });
    return res;
}

export {
    prepareObj,
    prepareState
};