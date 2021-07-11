import { useState } from "react";
const findPerDiff = (newNum, orgNum) => {
    return ((newNum - orgNum) / orgNum) * 100;
}

const DiffList = ({ precentages }) => {
    return (
        <table style={{ width: "10rem", textAlign: "left" }}>

            {
                precentages.map((percentage) => {
                    return (
                        <tr>
                            <td>{percentage.val}</td>
                            <td>{percentage.diff}</td>
                        </tr>
                    );
                })
            }


        </table>
    )
}

const PercentageDiff = () => {
    const [vals, setVal] = useState('');
    const [precentages, setPrecentages] = useState([]);
    const values = vals.split(',');
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
        console.log(per)
        setPrecentages(per);
    }

    return (
        <>
            <div>
                <h5>Calculate Diff:</h5>
                <input type="text" onChange={e => setVal(e.target.value)} />
                <button onClick={onCalc} >Calc</button>
                <DiffList precentages={precentages} />
            </div>
        </>
    )
}

export default PercentageDiff;