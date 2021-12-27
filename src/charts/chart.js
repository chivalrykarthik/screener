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
const Chart = ({ data = [], uniqYear = [] }) => {
    return (
        <>
            {
                data.length ? <LineChart width={1350} height={1000} data={data}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[5000, 20000]} />
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