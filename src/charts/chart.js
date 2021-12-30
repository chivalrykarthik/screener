import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line
} from 'recharts'

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const Chart = ({ data = [], uniqYear = [], yAxis = '' }) => {
    const axis = yAxis ? yAxis.split(',').map(v => parseInt(v)) : [];
    return (
        <>
            {
                data.length ? <LineChart width={1350} height={1000} data={data}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis domain={axis} />
                    <Tooltip />
                    <Legend />
                    {
                        uniqYear.map((year) => <Line type="monotone" dataKey={year} stroke={generateRandomColor()} />)
                    }

                </LineChart> : null
            }
        </>
    );
}

export default Chart;