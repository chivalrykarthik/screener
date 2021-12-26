import React, { useState } from 'react';
import Chart from './chart';

const Charts = () => {
    const [data, setData] = useState('');
    const [chartData, setChartDat] = useState([]);
    const handleFile = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            setData(text)
        };
        reader.readAsText(e.target.files[0])
    }
    const loadFile = () => {
        const tmpChartData = [...chartData];
        const tmpData = data.split('\n').slice(1);
        tmpData.forEach((val, index) => {
            let [date, open] = val.split(',');

            if (typeof date === 'string' && typeof open === 'string') {
                date = date.replace(/"/g, '').trim();
                open = open.replace(/"/g, '').trim();
                const [day, month, year] = date.split('-');
                if (!tmpChartData[index]) {
                    tmpChartData[index] = {
                        name: `${day}-${month}`
                    };
                }
                tmpChartData[index][year] = open;
            }
        });
        setChartDat(tmpChartData);
    }
    return (
        <>
            <input type="file" onChange={handleFile} />
            <button onClick={loadFile} >Load</button>

            <Chart data={chartData} />
        </>
    )
}

export default Charts;