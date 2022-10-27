import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{

    //this function will be executed in the child component, 
    //With this approach we can achieve down up data transfer
    const saveExpenseDatahandler = (enteredExpenseData)=>{
        const epxensedData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //this funtion passes data to upper component in the chain
        props.onAddExpense(epxensedData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDatahandler}/>
        </div>
    );
}
export default NewExpense;