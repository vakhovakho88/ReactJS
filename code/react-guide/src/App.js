import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


//Source for our expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 455,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop",
    amount: 1200.50,
    date: new Date(2021, 6, 15),
  },
  {
    id: "e6",
    title: "Groceries",
    amount: 60.32,
    date: new Date(2021, 6, 18),
  },
  {
    id: "e7",
    title: "Restaurant Bill",
    amount: 80.75,
    date: new Date(2021, 5, 20),
  },
  {
    id: "e8",
    title: "Gasoline",
    amount: 30.00,
    date: new Date(2021, 6, 24),
  },
  {
    id: "e9",
    title: "Gym Membership",
    amount: 45.99,
    date: new Date(2021, 4, 4),
  },
  {
    id: "e10",
    title: "Mobile Phone Bill",
    amount: 55.44,
    date: new Date(2021, 6, 10),
  },
  {
    id: "e11",
    title: "Electricity Bill",
    amount: 70.30,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e12",
    title: "New Shoes",
    amount: 100.10,
    date: new Date(2021, 6, 3),
  }
];




const App = () => {
  // data as state for our expenses, now we can add or remove element from it and UI will be changed
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    //add a new Expense to a state of List
    setExpenses(
      (prevExpenses) => { return [expense, ...prevExpenses] }
    )
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
