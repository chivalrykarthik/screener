import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line
} from 'recharts'

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
                        uniqYear.map((year) => <Line type="monotone" dataKey={year} stroke="#8884d8" />)
                    }

                </LineChart> : null
            }
        </>
    );
}

export default Chart;