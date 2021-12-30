import React, { useState } from 'react';
import Chart from './chart';
import loadData from './util';

const Charts = () => {
    const [data, setData] = useState('');
    const [chartData, setChartDat] = useState([]);
    const [uniqYear, setYear] = useState([]);
    const [noOfDays, setNoOfDays] = useState(0);
    const handleChange = (e) => {
        const val = e.target.value;
        setNoOfDays(val);
    }
    const handleFile = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            setData(text)
        };
        reader.readAsText(e.target.files[0])
    }
    const handleSelect = async (e) => {
        const val = e.target.value;
        const result = await loadData(val);

        if (result?.data) {
            setData(result.data);
        }
    }
    const clearChart = () => {
        setData('');
        setChartDat([]);
        setYear([]);
    }
    const loadFile = () => {
        const tmpChartData = [...chartData];
        const tmpData = data.split('\n').slice(1);
        const yr = [...uniqYear];
        let i = 0;
        tmpData.forEach((val, index) => {
            if (parseInt(noOfDays) > 0 && index % parseInt(noOfDays) != 0) return;
            let [date, open] = val.split(',');

            if (typeof date === 'string' && typeof open === 'string') {
                date = date.replace(/"/g, '').trim();
                open = open.replace(/"/g, '').trim();
                const [day, month, year] = date.split('-');
                if (!tmpChartData[i]) {
                    tmpChartData[i] = {
                        name: `${day}-${month}`
                    };
                }
                tmpChartData[i][year] = open;
                if (!yr.includes(year)) {
                    yr.push(year);
                }
                i++;
            }

        });
        setChartDat(tmpChartData);
        setYear(yr);
    }
    return (
        <>
            <input type="file" onChange={handleFile} />
            <input type="text" type="number" value={noOfDays} onChange={handleChange} />
            <select onChange={handleSelect} >
                {Array.from({ length: 21 }, (_, key) => {
                    return (
                        <option value={key}>{key}</option>
                    )
                })}
            </select>
            <button onClick={loadFile} >Load</button>
            <button onClick={clearChart} >Clear</button>

            <Chart data={chartData} uniqYear={uniqYear} />
        </>
    )
}

export default Charts;