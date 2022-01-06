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
    const [index, setIndex] = useState('');
    const [compareData, setCompareData] = useState('');
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
    const handleIndex = (e) => {
        const val = e.target.value;
        setIndex(val);
    }
    const handleSelect = async (type, e) => {
        const val = e.target.value;
        if (!val) return;
        const result = await loadData(val, index);

        if (result?.data) {
            if (type != 'other') {
                setData(result.data);
            } else {
                setCompareData(result.data);
            }
        }
    }
    const clearChart = () => {
        setData('');
        setChartDat([]);
        setYear([]);
    }
    const indexCompareChart = (dt, type) => {
        const tmpChartData = [...chartData];
        const tmpData = dt.split('\n').slice(1);
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
                tmpChartData[i][type || year] = Number(((open - startingPrice) / startingPrice) * 100).toFixed(2);
                if (!yr.includes(type) && !yr.includes(year)) {
                    yr.push(type || year);
                }
                i++;
            }
        });
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
            indexCompareChart(data, 'n50');
            if (compareData) {
                indexCompareChart(compareData, index);
            }
            return;
        }
        return basicChart();
    }
    return (
        <>
            <input type="file" onChange={handleFile} />
            <input type="checkbox" onChange={handleCheckbox} /> Compare

            <input type="text" type="number" value={noOfDays} onChange={handleChange} />
            <input type="text" value={yAxis} onChange={handleAxisChange} />
            <select onChange={handleSelect.bind(null, 'n50')} >
                <option value=''>Select</option>
                {Array.from({ length: 22 }, (_, key) => {
                    return (
                        <option value={key}>{key}</option>
                    )
                })}
            </select>

            {
                !isCompare ? null : (
                    <>
                        <select onChange={handleIndex} >
                            <option value=''>Select</option>
                            <option value="auto">Auto</option>
                        </select>
                        <select onChange={handleSelect.bind(null, 'other')} >
                            <option value=''>Select</option>
                            {Array.from({ length: 22 }, (_, key) => {
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