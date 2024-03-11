import React from 'react';
import { Column } from '@ant-design/plots';

const Chart = ({ data}) => {
    console.log('data----------',data)
    const config = {
        data,
        xField:"na",
        yField:"vv",
        scrollbar:{ x: { ratio: 0.1 } },
    };

    return <Column {...config} />;
};

export default Chart;