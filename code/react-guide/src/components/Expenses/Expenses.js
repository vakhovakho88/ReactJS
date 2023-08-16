import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";

//import filter component
import ExpensesFilter from "./ExpensesFilter";
//import Expenses List, the Component is responsible for rendering a list

import ExpensesList from "./ExpensesList";




const Expenses = (props) => {
  //2020 is an initial value
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }


  //filtering an array, and only show items from a choosen year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    <div>


      <Card className="expenses">

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesList items = {filteredExpenses}/> 


        {/* Hardcoded Version      */}
        {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      /> */}
      </Card>
    </div>
  );
}

export default Expenses;
