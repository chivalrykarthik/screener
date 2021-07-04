const Txt = ({ value, setVal, onSubmit }) => {
    return (
        <>
            <textarea value={value} onChange={(e) => setVal(e.target.value)} />
            <button onClick={onSubmit} >Add</button>
        </>
    )
};
export default Txt;