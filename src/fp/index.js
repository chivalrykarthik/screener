import React,{useState} from 'react';
import res from './res.json';
import {Container} from './style.js';
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'Date',
        selector: row => row.match[0].srcDate,
    },
    {
        name: 'Symbol',
        selector: row => row.match[0].mtSymbol,
    },
    {
        name: 'Open',
        selector: row => row.match[0].projOpen,
    },
    {
        name: 'Close',
        selector: row => row.match[0].projClose,
    },
	{
        name: 'Diff',
        selector: row => row.match[0].diff,
    }
];

const conditionalRowStyles = [
  {
    when: row => row.match[0].projOpen < row.match[0].projClose,
    style: {
      backgroundColor: 'seagreen',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  
];

const checkPosition = (data)=>{
	let up= 0;
	let down = 0;
	let eq=0;
	data.forEach(dt=>{
		if(dt.match[0].projOpen > dt.match[0].projClose){
			down++; 
		}
		else if(dt.match[0].projOpen < dt.match[0].projClose){
			up++; 
		}
		else {
			eq++;
		}
	})
	return {
		up,down,eq
	}
}

const calcPercentage = (oldNum, newNum) => {
    const num1 = oldNum;
    const num2 = newNum;
    return (((num2 - num1) / num1) * 100).toFixed(2);
}

const processData =(data)=>{
	return data.map(dt=>{
		const diff = calcPercentage(dt.match[0].projOpen,dt.match[0].projClose);
		dt.match[0].diff = diff;
	})
}

const View = ({symbol})=>{
	const [showSymb, setSymb] = useState(false);
	const {up,down,eq} = checkPosition(res[symbol]);
	const handleClick =()=>{
		setSymb(!showSymb);
	}
	return (
		<>
			<div className ='headingContainer' onClick = {handleClick} >
				<div className = 'title'>{symbol}</div>
				<div className = {`stats ${up>down ? 'up': down > eq ? 'down': 'eq'}`}> UP:{up} Down:{down} EQ:{eq}</div>
			</div>						
			{
			showSymb && <DataTable
				columns={columns}
				data={res[symbol]}
				conditionalRowStyles={conditionalRowStyles}
			/>
			}
		</>
	)
}
const Fp =()=>{
	const symbols = Object.keys(res);
	return(
		<Container>
			{
				symbols.map(symbol=>{
					if(res[symbol].length){
						
						const dt = processData(res[symbol]);
						return (
							<>
								<View symbol= {symbol} />
							</>
						)
					}
				})
			}
		</Container>
	);
}

export default Fp;