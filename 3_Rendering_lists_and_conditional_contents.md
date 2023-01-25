## In this Section we will work with really Dynamic data

- Curly braces allow us to use javascript everywhere in JSX
- In the example below javascript recognises JSX item inside it
- It could be switched between JSX und Javascript as chain
- With map function we can operate with all elements of an array, but with copies of it
  
  
```javascript
 {
        {
          props.items.map(expense =>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date} />)
        }
 }
```