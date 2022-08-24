import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{

    const saveExpenseDatahandler = (enteredExpenseData)=>{
        const epxensedData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(epxensedData);
        props.onAddExpense(epxensedData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDatahandler}/>
        </div>
    );
}
export default NewExpense;