import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props)=>{

    const chartDataPoints = [
        {label:'Jan', value: 0},
        {label:'Feb', value: 0},
        {label:'Mar', value: 0},
        {label:'Apr', value: 0},
        {label:'May', value: 0},
        {label:'Jun', value: 0},
        {label:'Jul', value: 0},
        {label:'Aug', value: 0},
        {label:'Sep', value: 0},
        {label:'Oct', value: 0},
        {label:'Nov', value: 0},
        {label:'Dec', value: 0},
    ];

    // if we want to loop throug array for (.... of .....)
    //If we want to loop throug Object for (.... in ....)
    for (const expense of props.expenses){
    
        const expenseMonth = expense.date.getMonth(); //Starting at 0. January has index 0
        chartDataPoints[expenseMonth].value+=expense.amount; 
    }
   
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart;