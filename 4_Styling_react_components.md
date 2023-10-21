## **Git Personal Reference - Styling in React**

### **Introduction**
- React apps involve more than just component composition and logic.
- Styling ensures that React applications are visually appealing.
  
### **Styling Techniques**
1. **Dynamic or Conditional Styling:**
   - Set styles based on certain conditions.
   - *Example:* Coloring an input field red if user input is invalid.

2. **Scoped Styling:**
   - Styles that are limited to a specific component without global application.
   - Ensures one component's styles don't unintentionally affect others.

3. **Styled Components (Third-Party Library):**
   - Allows the creation of pre-styled components with scoped styles.
   - Very popular in the React community.

4. **CSS Modules:**
   - Another approach to ensure styles are scoped to specific components.

### **Demo Project Overview**
- **Functionality:** 
  - Allows adding course goals (e.g., "learn React").
  - Added goals appear in a list.
  - Clicking on a list item deletes it.
  
- **Features Used:** 
  - `useState` for state management.
  - Functions bound to events.
  - Dynamically outputting lists using `map`.

### **Getting Started with the Demo Project:**
1. Download the attached project.
2. Run `npm install` in the project directory to install necessary packages.
3. Start the project with `npm start`.
4. Familiarize yourself with the source code and structure.

### **Objective of the Section:**
- Explore various styling options available in React.

### **Key Takeaway:**
- Styling is a vital aspect of React development, offering various techniques to effectively and attractively present your components.



# 2
## **Git Personal Reference - Dynamic Styling in React**

### **1. Project Set-Up**
Ensure your project is set up correctly, referring back to previous lectures for guidance.

**Example:** 
```css
.goal-list {
  /*...some styles...*/
}
```
The above CSS class `.goal-list` affects any element with that specific class.

### **2. Objective of Dynamic Styling**
Alter styles based on user actions or input.

**Example:** Highlight the input area in red if a user submits an empty goal.

### **3. Detecting Valid Input**
Check if the user input is considered valid.

**Example:**
```javascript
if (enteredValue.trim().length === 0) {
  // Input is empty
}
```

### **4. Tracking Input Validity with State**
Leverage `useState` to maintain a record of input validity.

**Example:**
```javascript
const [isValid, setIsValid] = useState(true);
if (!isValid) {
  // Apply invalid styling
}
```

### **5. Applying Conditional Styles**
Dynamically apply styles based on conditions using React's `style` prop.

**Example:**
```javascript
<label style={{ color: !isValid ? 'red' : 'black' }}>
  /* ... */
</label>
```
The label color switches between red (for invalid) and black (for valid).

### **6. Resetting Styles**
Reset styles once user input becomes valid.

**Example:**
```javascript
if (inputValue.trim().length > 0) {
  setIsValid(true);
}
```
When a user starts typing in a previously invalid input, the error styles are removed.

### **7. Concerns with Inline Styles**
- **Duplication:** Having both CSS and inline styles.
- **Priority:** Inline styles will override other CSS styles, which might lead to unexpected behavior.

### **Conclusion**
While inline styles offer a fast way to implement dynamic styling in React components, their high priority and potential for code duplication might lead to complications in complex projects. Consider alternative methods for achieving the same results.




# 3

## **Git Personal Reference - Dynamic Class Handling in React**

### **1. Alternative to Inline Styles**
Instead of inline styles, utilize dynamic CSS classes based on conditions.

### **2. Dynamically Adding a CSS Class**
Add a new CSS class to an element based on specific conditions, like invalid input.

**Example:** 
```javascript
const classNameString = `form-control ${!isValid ? 'invalid' : ''}`;
```
The `form-control` class always exists. The `invalid` class is only appended if the input is invalid.

### **3. Utilizing Template Literals**
Use JavaScript's template literals to dynamically create a string with the desired classes.

**Example:**
```javascript
<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  /* ... */
</div>
```
The class name will either be "form-control" or "form-control invalid" based on the `isValid` state.

### **4. Styling Using Dynamic Classes**
In your CSS file, create styles for your dynamic classes. 

**Example:**
```css
.form-control.invalid label {
  color: red;
}

.form-control.invalid input {
  border-color: red;
  background: lightcoral;
}
```

### **5. React's Role**
React ensures that the Document Object Model (DOM) is updated based on the dynamic classes you've set. It adds or removes classes in the DOM as necessary.

### **Conclusion**
By using dynamic CSS class assignments, you can achieve dynamic styling without relying on inline styles. This approach keeps style definitions within CSS files and allows React to handle the dynamic application of these styles.



Certainly! Let's distill the content into its core concepts and provide an example.



# 4


### **Git Personal Reference: Styled-Components in React**

#### **1. Introduction**
Styled-Components allow dynamic setting of styles and classes in React. Unlike regular CSS files, these styles are scoped specifically to the component they're applied to.

#### **2. Basic Concept**
- Regular CSS files impact all elements matching selectors globally.
- With Styled-Components, styles are scoped to the component.

  ```javascript
  import styled from 'styled-components';
  ```

#### **3. Using Styled-Components**
- Install the package:
  ```
  npm install --save styled-components
  ```
- https://styled-components.com/
- 
- **Basic Usage**:

  ```javascript
  const StyledButton = styled.button`
      background: white;
      &:hover {
          background: gray;
      }
  `;
  ```

  Here, `StyledButton` is a React component with the specified styles. The `&` is a placeholder for the component's name, useful for pseudo-selectors.

#### **4. Dynamic Styling with Props**

  ```javascript
  const ColoredButton = styled.button`
      background: ${props => props.bgColor || 'white'};
  `;

  // Usage:
  <ColoredButton bgColor="blue">Blue Button</ColoredButton>
  ```

  In the above example, the background color of the button changes based on the passed `bgColor` prop.

#### **5. Scoped Styles**
- Styled-Components generate unique class names for every styled component. This ensures no style spill-overs between components.
- Examining the element in developer tools will show a uniquely generated class name, which is handled behind the scenes.

#### **6. Dynamic and Conditional Styling**
With Styled-Components, you can easily integrate dynamic and conditional styles based on component state, props, or any JavaScript logic.






100 Styled Components & Dynamic Props


