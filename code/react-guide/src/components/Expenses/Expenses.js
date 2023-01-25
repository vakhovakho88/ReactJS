import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

//import filter component
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  //2020 is an initial value
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }



  
  const expenses = props.items;
  return (
    <div>
     

    <Card className="expenses">
     
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

     {
      props.items.map(expense=><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)
     }



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
