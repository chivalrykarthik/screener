import { useState } from 'react';


const useLoadFile = () => {
    const [data, setData] = useState('');
    const [chartData, setChartDat] = useState([]);
    const [uniqYear, setYear] = useState([]);
    const [noOfDays, setNoOfDays] = useState(5);
    const processData = (dt, type, isCompare) => {
        const tmpChartData = [...chartData];
        const tmpData = dt.split('\n').slice(1);
        const yr = [...uniqYear];
        let i = 0;
        let [, startingPrice] = tmpData[0].split(',');
        startingPrice = startingPrice.replace(/"/g, '').trim();
        tmpData.forEach((val, index) => {
            if (parseInt(noOfDays) > 0 && index % parseInt(noOfDays) != 0) return;
            let [date, open, , close] = val.split(',');
            open = close;
            if (open.includes('-')) return;
            console.log(open)
            if (typeof date === 'string' && typeof open === 'string') {
                date = date.replace(/"/g, '').trim();
                open = open.replace(/"/g, '').trim();
                const [day, month, year] = date.split('-');
                if (!tmpChartData[i]) {
                    tmpChartData[i] = {
                        name: `${day}-${month}`
                    };
                }
                const index = isCompare ? type : year;
                if (isCompare) {
                    tmpChartData[i][index] = Number(((open - startingPrice) / startingPrice) * 100).toFixed(2);
                } else {
                    tmpChartData[i][index] = open;
                }
                if (!yr.includes(index)) {
                    yr.push(index);
                }
                i++;
            }
        });
        setChartDat(tmpChartData);
        setYear(yr);
    }


    return {
        setNoOfDays,
        setData,
        setChartDat,
        setYear,
        processData,
        uniqYear,
        noOfDays,
        chartData,
        data
    };
}

export default useLoadFile;