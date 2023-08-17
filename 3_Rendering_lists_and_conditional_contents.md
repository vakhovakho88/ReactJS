## In this section, we will delve (vertiefen) into working with truly dynamic data.

- Curly braces in JSX enable the embedding (Einbettung) of JavaScript expressions.
- In the example provided, JavaScript interprets the embedded JSX.
- You can seamlessly (einwandfrei) toggle (umschalten) between JSX and JavaScript, using them interchangeably (abwechslend).
- Using the map function allows us to manipulate elements of an array, creating new arrays without modifying the original.
  
  
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


## **Using Stateful Lists**

- **Note**: When using a standard array as the source for a UI element, two-way binding cannot be achieved.
  
- **Problem**: Elements can be added to the source array, but the UI will not reflect these changes automatically (Änderungen wiederspiegeln).

- **Solution**: To ensure (sicherstellen, sichergehen)  that the UI updates when the source array changes, utilize (anwenden) the `State`.

- **Implementation**: Use callback functions to update the state accordingly (entsprechend, dementsprechend).

### Current Structure:

```javascript
const DUMMY_EXPENSES = [
  // Here should be an array of objects.
  // This is located outside of the app function.
];

const App = () => {
  // Create a state with initial data.
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
```

- We aim to implement a function that adds an expense to the `expenses` state.
- Caution is needed because the new list generated depends on the previous list. This is why the following structure is recommended:

```javascript
  const addExpenseHandler = (expense) => {
    // Add a new expense to the state of the list.
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }
```

- Note that we're using a callback function provided by `useState`.
- Additionally, array destructuring is being utilized.


## Understanding Keys

Even if everything seems to be working, we often encounter a key-related error. Here are some of the concerns and implications of not using keys in React:

- **Performance Issues**: Without keys, React cannot optimize the rendering process for lists. If there's a state change affecting the list, React might need to re-render the entire list, not just the changed items.

- **Unintended Behaviors**: If keys are absent, React defaults to using the array index as the key. This can result in problems, especially when list items change order, or when items are added or removed. Component state and lifecycle might not behave as expected in these cases.

- **Inefficient Reconciliation**: React uses a reconciliation process to update the DOM. With proper keys, React can efficiently determine which list items have changed or moved, updating only those. Without keys, the process is less efficient and might update the entire list in the DOM more frequently.

Keys can be any number or string, and it's always recommended to use keys with list items.

```javascript 
props.items.map(expense =>
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
)
```

## Exercise 3: Filtering and Display

```javascript
// Filter the array and display only items from a chosen year
const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

// Now, we use the filtered array to render our items
filteredExpenses.map(expense =>
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />      
)
```

## Conditionally Rendering Content

For conditional rendering in React, we can't use long statements like `for` or `if` directly inside curly braces. However, there are several ways to achieve conditional rendering:

### Approach 1: Using a Ternary Operator

Check if any elements are found using the ternary operator:

```javascript
filteredExpenses.length === 0 ? <p>No Expenses Found</p> 
  : filteredExpenses.map
    (expense =>
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
    )
```

### Approach 2: Splitting the Ternary Operator

This relies on the behavior of the JavaScript `&&` operator:

```javascript
filteredExpenses.length === 0 && <p>No Expenses Found</p>

filteredExpenses.length > 0 && filteredExpenses.map(expense =>
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
)

```

### Approach 3: Preprocessing Data Outside the Return Block

This approach promotes cleaner JSX by using a separate variable for content:

```javascript
let expensesContent = <p>No Expenses Found</p>;

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map(expense =>
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  );
}

return (
  ...
  {expensesContent}
  ...
)
```

### Adding Conditional Return Statements 

Consider creating a separate component, like `ExpensesList.js`, to handle the rendering of the list of expenses, making the main component cleaner:

```javascript
import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">Found no Expenses</h3>
  }

  return (
    <ul className="expenses-list">
      {
        props.items.map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      }
    </ul>
  );
}

export default ExpensesList;
```

Then, in the main component:

```javascript
<ExpensesList items={filteredExpenses}/> 
```

### Uncorected

# Adding a Chart

This representation captures the structure of the components and highlights the props being passed from parent to child at each level.

- **App.js**
  - **Expenses** (receives `expenses` prop from App.js)
    - **ExpensesChart** (receives `filteredExpenses` prop from Expenses)
      - **Chart** (receives `dataPoints` prop from ExpensesChart)
        - **ChartBar** (receives `label`, `value`, `maxValue` props from Chart)

---

# Adding Dynamic Styles

- We can add dynamic styles in JSX code.
- Here's an example from `ChartBar.js`:

```javascript
// Calculate progress height
let barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';

return (
    ...
    <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
    ...
);
```





Certainly! Below is the provided content in Markdown format:

markdown
Copy code
# Adding a Chart

This diagram depicts the relationship and structure of the components, emphasizing the props passed from parent to child at each level.

- **App.js**
  - **Expenses** (receives `expenses` prop from App.js)
    - **ExpensesChart** (receives `filteredExpenses` prop from Expenses)
      - **Chart** (receives `dataPoints` prop from ExpensesChart)
        - **ChartBar** (receives `label`, `value`, `maxValue` props from Chart)

---

# Adding Dynamic Styles

- We can add dynamic styles in JSX code.
- Here's an example from `ChartBar.js`:

```javascript
// Calculate progress height
let barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';

return (
    ...
    <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
    ...
);
```
* Explanation of `{{height: barFillHeight}}`:
  - **Outer curly braces**: Indicate dynamic content in JSX.
  - **Inner curly braces**: Denote a JavaScript object passed as a parameter.


* `amount: +enteredAmount`
The plus sign forces the value to convert to a number.


