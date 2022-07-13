//this is a form tu submit new expense
// this form is located in the container NewExpense
import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //eventhandler thal listens to title change in the form
  //event object commes here automatically
  //event.target -> the object, that called an event
  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };
  const amountChangeHandler = (event) =>{
    setenteredAmount(event.target.value);
    console.log(enteredAmount);
  };
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };


  return (
    <form>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
        </div>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;