import { useState } from 'react';
import { Button } from './Styles/Txt';
import { useStore } from './store'
import action from './store/action';

const CompareDropDown = ({ handleChange }) => {
    const [store] = useStore();
    return (
        <>
            <select name='value' onChange={handleChange}>
                <option value=''>Select</option>
                {
                    store.filtersList.map(filter => <option value={filter.label}>{filter.label}</option>)
                }
            </select>
        </>
    )
}
const Rows = ({ rowNum, label, value, checked }) => {
    const [store, dispatch] = useStore();
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
                dispatch({ type: action.UPD_FILTERS, data: { key: rowNum, col: 'value', value: Math.round(store.average[label].val / store.average[label].len) } })
            } else {
                dispatch({ type: action.UPD_FILTERS, data: { key: rowNum, col: 'value', value: '' } })
            }
        }
        dispatch({ type: action.UPD_FILTERS, data: { key: rowNum, col: name, value: value } })
        if ((name === 'operator' || name === 'value') && value) {
            dispatch({ type: action.UPD_FILTERS, data: { key: rowNum, col: 'checked', value: true } })
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
                /> : <CompareDropDown handleChange={handleChange} />}
            </div>
        </div>
    )
}
const Filters = () => {
    const [store, dispatch] = useStore();
    const addToSearch = () => {
        dispatch({ type: action.ADD_SEARCH });
    }
    return (
        <>
            <h5>Filters:</h5>
            <div className='filters'>

                {
                    store.filtersList.map((filter, key) => <Rows label={filter.label} operator={filter.operator} value={filter.value} checked={filter.checked} key={key} rowNum={key}
                    />)
                }
                <br />
            </div>
            <Button onClick={addToSearch} >Filter</Button>
        </>
    )
}

export default Filters;