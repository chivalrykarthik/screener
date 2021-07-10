
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
        <div>
            <input type="checkbox" onChange={handleChange} name='checked' checked={checked} />
            <label>{label}</label>&nbsp;
            <select name='operator' onChange={handleChange}>
                <option value='>'>Greater</option>
                <option value='>='>Greater & Equal</option>
                <option value='<'>Less</option>
                <option value='<='>Less & equal</option>
                <option value='!='>Not equal</option>
                <option value='=='>Equal</option>
            </select>
            <input type="text" placeholder='Value' name='value' value={value} onChange={handleChange} />
        </div>
    )
}
const Filters = ({ filtersList, updFilter, addToSearch }) => {
    return (
        <>
            <div className='filters'>
                Filters:
                {
                    filtersList.map((filter, key) => <Rows label={filter.label} operator={filter.operator} value={filter.value} checked={filter.checked} key={key} rowNum={key} updFilter={updFilter} />)
                }
                <br />
                <button onClick={addToSearch.bind(null, filtersList)} >Filter</button>
            </div>
        </>
    )
}

export default Filters;