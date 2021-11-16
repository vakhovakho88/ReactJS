import {React, useState} from 'react'
import Card from '../UI/Card';
import ExpenceDate from './ExpenseDate';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
 

  const  [expenseTitle,setTitle] = useState(props.title);
  const expenseAmount = props.amount;


  const clickHandler = () =>{
    setTitle("Changed Value");
  }

  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date}/>
      
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
