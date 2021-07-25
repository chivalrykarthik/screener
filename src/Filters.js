import { Button } from './Styles/Txt';

const Rows = ({ rowNum, label, operator, value, checked, updFilter }) => {
    const handleChange = (e) => {
        let value = e.target.value;
        const name = e.target.name;

        if (name === "checked") {
            value = !checked;
        }
        updFilter(rowNum, name, value);
        if ((name === 'operator' || name === 'value') && value) {
            updFilter(rowNum, 'checked', true);
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%", margin: "0 0 5px 0" }}>
            <div>
                <input type="checkbox" onChange={handleChange} name='checked' checked={checked} />
            </div>
            <div style={{ width: "10em" }}>
                <label>{label}</label>&nbsp;
            </div>
            <div>
                <select name='operator' onChange={handleChange}>
                    <option value=''>Select</option>
                    <option value='>'>Greater</option>
                    <option value='>='>Greater & Equal</option>
                    <option value='<'>Less</option>
                    <option value='<='>Less & equal</option>
                    <option value='!='>Not equal</option>
                    <option value='=='>Equal</option>
                </select>
            </div>
            <div>
                <input
                    type="text"
                    placeholder='Value'
                    name='value'
                    value={value}
                    onChange={handleChange}
                    autoComplete='off'
                />
            </div>
        </div>
    )
}
const Filters = ({ filtersList, updFilter, addToSearch }) => {
    return (
        <>
            <h5>Filters:</h5>
            <div className='filters'>

                {
                    filtersList.map((filter, key) => <Rows label={filter.label} operator={filter.operator} value={filter.value} checked={filter.checked} key={key} rowNum={key} updFilter={updFilter} />)
                }
                <br />
            </div>
            <Button onClick={addToSearch.bind(null, filtersList)} >Filter</Button>
        </>
    )
}

export default Filters;