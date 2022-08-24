//this is a form tu submit new expense
// this form is located in the container NewExpense
import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  //for all three values let us create a separate state. Multy Statet approach
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');



  //instead of three states we could have just one object, one state approach
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  //eventhandler thal listens to title change in the form
  //event object commes here automatically
  //event.target -> the object, that called an event
  const titleChangeHandler = (event) =>{
    //approach 1: Multiple states approach
    setEnteredTitle(event.target.value);
    //console.log(enteredTitle)

    //approach 2:
    //we use spread operator here

    // setUserInput(
    //   {
    //     ...userInput,
    //     enteredTitle: event.target.value
    //   }
    // );


    // approach 3:
    // third and better Approcah for state update is an arrow function, to achieve better Scheduling
    // we should use it, if the new State depends on Previous state
    
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle:event.target.value};
    // });
    // console.log(userInput.enteredTitle);


  };
  const amountChangeHandler = (event) =>{
    setenteredAmount(event.target.value);
    //console.log(enteredAmount);

    // setUserInput(
    //   {
    //     ...userInput,
    //     enteredAmount: event.target.value
    //   });

  };
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
    //console.log(enteredDate);
    
    
    // setUserInput(
    //   {
    //     ...userInput,
    //     enteredDate: event.target.value
    //   });
  };


  const submitHandler = (event)=>{
    // To prevent reloading of the page after submitin (After we click submit button)
    event.preventDefault();

    // create an Object that will be used for Submitting
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    //console.log(expenseData)

    //two way Binding, clear the inputs after submition
    setEnteredTitle('');
    setenteredAmount('');
    setEnteredDate('');
    props.onSaveExpenseData(expenseData);
  };



  // to achieve 2 Way binding we need to add "value={enteredAmount}" attribute to our HTML tag
  



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}  value={enteredTitle}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}/>
        </div>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;