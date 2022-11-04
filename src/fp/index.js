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
		name: 'MDate',
        selector: row => row.match[0].mtDate,
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
    },
	
	{
        name: 'Five',
        selector: row => row.match[0].fifth,
    },
	{
        name: 'Ten',
        selector: row => row.match[0].tenth,
    },
	{
        name: 'Fourteen',
        selector: row => row.match[0].fourteenth,
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

const View = ({symbol,data})=>{
	const [showSymb, setSymb] = useState(false);
	const {up,down,eq} = checkPosition(data[symbol]);
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
				data={data[symbol]}
				conditionalRowStyles={conditionalRowStyles}
			/>
			}
		</>
	)
}
const LoadData =({data})=>{
	const symbols = Object.keys(data);
	return(
		<Container>
			{
				symbols.map(symbol=>{
					if(data[symbol].length){
						
						const dt = processData(data[symbol]);
						return (
							<>
								<View symbol= {symbol} data={data} />
							</>
						)
					}
				})
			}
		</Container>
	);
}

const ProcessDays = ({day,data})=>{
	const [showData, setShowData] = useState(false);
	const handleClick = ()=>{
		setShowData(!showData);
	}
	return (
		<>
			<div className ='headingContainer' onClick = {handleClick}>{day}</div>
			{showData && <LoadData data= {data[day]} />} 
		</>
	)
}

const Fp =()=>{
	
	return(
		<Container>
			{
				res.map(data=>{
						const day = Object.keys(data);						
						const len = Object.keys(data[day[0]]).length;
						return !!len && <ProcessDays day = { day } data={data}/>
				})
			}
		</Container>
	);
}

export default Fp;