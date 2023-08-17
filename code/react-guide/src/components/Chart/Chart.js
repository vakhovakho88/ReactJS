import React from 'react'
import './Chart.css';

//importing Chartbar Component
import ChartBar from './ChartBar.js';
const Chart = props =>{

    //retrieve only values of datapoints the numbers
    const dataPointValues = props.dataPoints.map(datapoint=>datapoint.value);
    //find the maximum of these numbers, spread operator makes this array as args
    const totalMaximum = Math.max(...dataPointValues);


    return <div className='chart'>
        {
        props.dataPoints.map(datapoint => <ChartBar 
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label} />)
        }
    </div>
};

export default Chart;