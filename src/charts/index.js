import React, { useState } from 'react';
import Chart from './chart';
import loadData from './util';
import useLoadFile from './hooks/useLoadFile';
const Charts = () => {
    const {
        setNoOfDays,
        setData,
        setChartDat,
        setYear,
        processData,
        clearLast,
        uniqYear,
        noOfDays,
        chartData,
        data
    } = useLoadFile();
    const [selectedYear, setSelectedYear] = useState('');
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
        const yAxisDefaults = isChecked ? '-100,200' : '5000,20000';
        setYAxis(yAxisDefaults);
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
    const handleIndex = async (e) => {
        const val = e.target.value;
        if (!val) return;

        const result = await loadData(selectedYear, val);

        if (result?.data) {
            setCompareData(result.data);
        }
        setIndex(val);
    }
    const handleSelect = async (type, e) => {
        const val = e.target.value;
        if (!val) return;
        const result = await loadData(val, type);

        if (result?.data) {
            if (type != 'other') {
                setData(result.data);
            } else {
                setCompareData(result.data);
            }
        }
        setSelectedYear(val);
    }
    const clearChart = () => {
        setData('');
        setChartDat([]);
        setYear([]);
    }

    const loadFile = () => {
        if (isCompare) {
            processData(data, 'n50', isCompare);
            if (compareData) {
                processData(compareData, index, isCompare);
            }
            return;
        }
        return processData(data, '', isCompare);
    }
    return (
        <>
            <input type="file" onChange={handleFile} />
            <input type="checkbox" onChange={handleCheckbox} /> Compare

            <input type="text" type="number" value={noOfDays} onChange={handleChange} />
            <input type="text" value={yAxis} onChange={handleAxisChange} />
            <select onChange={handleSelect.bind(null, 'n50')} >
                <option value=''>Select</option>
                {Array.from({ length: 23 }, (_, key) => {
                    return (
                        <option value={key}>{key}</option>
                    )
                })}
            </select>
            <button onClick={loadFile} >Load</button>

            {
                !isCompare ? null : (
                    <>
                        <select onChange={handleIndex} >
                            <option value=''>Select</option>
                            <option value="auto">Auto</option>
                            <option value="bank">Bank</option>
                            <option value="pb">Private Bank</option>
                            <option value="psub">PSU Bank</option>
                            <option value="fs">FS</option>
                            <option value="pharma">Pharma</option>
                            <option value="fmcg">FMCG</option>
                            <option value="it">IT</option>
                            <option value="media">Media</option>
                            <option value="metal">Metal</option>
                            <option value="realty">Realty</option>
                        </select>

                        {/*<select onChange={handleSelect.bind(null, 'other')} >
                            <option value=''>Select</option>
                            {Array.from({ length: 22 }, (_, key) => {
                                return (
                                    <option value={key}>{key}</option>
                                )
                            })}
                        </select>*/}
                        <button onClick={loadFile} >Compare</button>
                    </>
                )

            }

            <button onClick={clearLast} >Clear Index</button>
            <button onClick={clearChart} >Clear All</button>
            <Chart
                data={chartData}
                uniqYear={uniqYear}
                yAxis={yAxis}
            />
        </>
    )
}

export default Charts;