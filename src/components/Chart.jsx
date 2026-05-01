"use client"

import { Legend, Pie, PieChart, Label } from 'recharts';

const Chart = ({ data }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                minHeight: '300px',
                border: 'none',
                padding: '10px',
                justifyContent: 'space-around',
                alignItems: 'stretch',
            }}
        >
            <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
                <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" cornerRadius="10%" paddingAngle={5} isAnimationActive={true} />
                <Legend />
            </PieChart>


        </div>
    );
};

export default Chart;