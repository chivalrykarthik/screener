import React, { useState } from 'react';
import Chart from './chart';
import loadData from './util';

const Charts = () => {
    const [data, setData] = useState('');
    const [chartData, setChartDat] = useState([]);
    const [uniqYear, setYear] = useState([]);
    const [noOfDays, setNoOfDays] = useState(0);
    const [yAxis, setYAxis] = useState('5000,20000');
    const [isCompare, setCompare] = useState(false);
    const handleChange = (e) => {
        const val = e.target.value;
        setNoOfDays(val);
    }
    const handleCheckbox = (e) => {
        const isChecked = e.target.checked;
        setCompare(isChecked);
    }
    const handleAxisChange = (e) => {
        const val = e.target.value;
        setYAxis(val);
    };
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
        if (!val) return;
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
    const indexCompareChart = () => {
        const tmpChartData = [...chartData];
        const tmpData = data.split('\n').slice(1);
        const yr = [...uniqYear];
        let i = 0;
        let [, startingPrice] = tmpData[0].split(',');
        startingPrice = startingPrice.replace(/"/g, '').trim();
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
                tmpChartData[i][year] = Number(((open - startingPrice) / startingPrice) * 100).toFixed(2);
                if (!yr.includes(year)) {
                    yr.push(year);
                }
                i++;
            }
        });
        console.log(tmpChartData)
        setChartDat(tmpChartData);
        setYear(yr);
    }
    const basicChart = () => {
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
    const loadFile = () => {
        if (isCompare) {
            return indexCompareChart();
        }
        return basicChart();
    }
    return (
        <>
            <input type="file" onChange={handleFile} />
            <input type="checkbox" onChange={handleCheckbox} /> Compare

            <input type="text" type="number" value={noOfDays} onChange={handleChange} />
            <input type="text" value={yAxis} onChange={handleAxisChange} />
            <select onChange={handleSelect} >
                <option value=''>Select</option>
                {Array.from({ length: 21 }, (_, key) => {
                    return (
                        <option value={key}>{key}</option>
                    )
                })}
            </select>

            {
                !isCompare ? null : (
                    <>
                        <select onChange={handleSelect} >
                            <option value=''>Select</option>
                            {Array.from({ length: 21 }, (_, key) => {
                                return (
                                    <option value={key}>{key}</option>
                                )
                            })}
                        </select>
                    </>
                )

            }
            <button onClick={loadFile} >Load</button>
            <button onClick={clearChart} >Clear</button>

            <Chart
                data={chartData}
                uniqYear={uniqYear}
                yAxis={yAxis}
            />
        </>
    )
}

export default Charts;