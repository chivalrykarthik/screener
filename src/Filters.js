import { useState } from 'react';
import { Button } from './Styles/Txt';

const CompareDropDown = ({ filtersList, handleChange }) => {
    return (
        <>
            <select name='value' onChange={handleChange}>
                <option value=''>Select</option>
                {
                    filtersList.map(filter => <option value={filter.label}>{filter.label}</option>)
                }
            </select>
        </>
    )
}
const Rows = ({ rowNum, label, value, checked, updFilter, filtersList, average }) => {
    const [isCompare, setCompare] = useState(false);
    const handleChange = (e) => {
        let value = e.target.value;
        const name = e.target.name;

        if (name === "checked") {
            value = !checked;
        }
        if (name === 'operator') {
            if (value === 'GT' || value === 'LT') {
                setCompare(true);
            } else {
                setCompare(false);
            }
            if (value === 'GTA' || value === 'LTA') {
                updFilter(rowNum, 'value', Math.round(average.[label].val / average[label].len));
            } else {
                updFilter(rowNum, 'value', '');
            }
        }

        updFilter(rowNum, name, value);
        if ((name === 'operator' || name === 'value') && value) {
            updFilter(rowNum, 'checked', true);
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%", margin: "10px" }}>
            <div>
                <input type="checkbox" onChange={handleChange} name='checked' checked={checked} />
            </div>
            <div style={{ width: '33%' }}>
                <label>{label}</label>&nbsp;
            </div>
            <div style={{ width: '33%' }}>
                <select name='operator' onChange={handleChange}>
                    <option value=''>Select</option>
                    <option value='>'>Greater</option>
                    <option value='>='>Greater & Equal</option>
                    <option value='<'>Less</option>
                    <option value='<='>Less & equal</option>
                    <option value='!='>Not equal</option>
                    <option value='=='>Equal</option>
                    <option value='GT'>Greater than</option>
                    <option value='LT'>Less than</option>
                    <option value='GTA'>Greater than AVG</option>
                    <option value='LTA'>Less than AVG</option>
                </select>
            </div>
            <div style={{ width: '33%' }}>
                {!isCompare ? <input
                    type="text"
                    placeholder='Value'
                    name='value'
                    value={value}
                    onChange={handleChange}
                    autoComplete='off'
                /> : <CompareDropDown filtersList={filtersList} handleChange={handleChange} />}
            </div>
        </div>
    )
}
const Filters = ({ filtersList, updFilter, addToSearch, average }) => {
    return (
        <>
            <h5>Filters:</h5>
            <div className='filters'>

                {
                    filtersList.map((filter, key) => <Rows average={average} label={filter.label} operator={filter.operator} value={filter.value} checked={filter.checked} key={key} rowNum={key} updFilter={updFilter} filtersList={filtersList} />)
                }
                <br />
            </div>
            <Button onClick={addToSearch.bind(null, filtersList)} >Filter</Button>
        </>
    )
}

export default Filters;