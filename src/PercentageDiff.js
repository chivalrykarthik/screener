import { useState } from "react";
import { findPerDiff } from './store/util';

const DiffList = ({ precentages }) => {
    return (
        <table style={{ width: "10rem", textAlign: "left" }}>

            {
                precentages.map((percentage) => {
                    return (
                        <tr>
                            <td>{percentage.val}</td>
                            <td>{Math.round(percentage.diff)}%</td>
                        </tr>
                    );
                })
            }


        </table>
    )
}

const PercentageDiff = ({ label }) => {
    const [vals, setVal] = useState('');
    const [precentages, setPrecentages] = useState([]);
    const values = vals.split(/\s|%/).filter(v => v).map(v => v.split(',').join(''));
    const onCalc = () => {
        const per = values.reduce((acc, val, key) => {
            let tmp = {
                diff: 0,
                val
            };
            if (key === 0) return [tmp];
            tmp.diff = findPerDiff(val, values[key - 1]);
            return [...acc, tmp];
        }, []);

        setPrecentages(per);
    }

    return (
        <>
            <div style={{ margin: "0 20px 0 0" }}>
                <h6>{label}</h6>
                <input type="text" onChange={e => setVal(e.target.value)} />
                <button onClick={onCalc} >Calc</button>
                <DiffList precentages={precentages} />
            </div>
        </>
    )
}


const AddDiff = () => {
    const [cmps, setCmp] = useState([])
    const addCmp = () => {
        const label = prompt(`Enter diff name`);
        if (!label) return;
        setCmp([...cmps, { CmpName: PercentageDiff, label }])
    }
    return (
        <div>
            <h5>Calculate Diff:</h5>
            <button onClick={addCmp}>Add</button>
            <div style={{ display: "flex", width: '90%', flexWrap: "wrap" }}>
                {cmps.map(cmp => {
                    const { CmpName, label } = cmp;
                    return <CmpName label={label} />
                })}
            </div>
        </div>
    )
}
export default AddDiff;