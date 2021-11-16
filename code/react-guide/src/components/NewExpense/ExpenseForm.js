//this is a form tu submit new expense
// this form is located in the container NewExpense
import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2024-12-31"/>
        </div>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;