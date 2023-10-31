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







## **Git Reference: Styled Components in React**

### **1. Introduction**
Styled components allow for styling React components using a unique and more dynamic approach than regular CSS.

### **2. Benefits**
- Encapsulation: Each styled component has unique class names, so styles don't spill over.
- Dynamic Styling: Styled components can adjust styles based on their props.

### **3. How to Use**

**a. Basic Usage:**
```javascript
import styled from 'styled-components';

const MyStyledDiv = styled.div`
  background: lightgray;
`;
```
In the above example, we've created a styled `div` with a `lightgray` background.

**b. Multiple Components in One File:**
While it's good practice to have one component per file, styled components can be co-located if they're closely related.
  
**c. Nested Selectors:**
```javascript
const MyStyledDiv = styled.div`
  label {
    color: blue;
  }
`;
```
Here, a nested `label` within `MyStyledDiv` will have a color of blue.

**d. Dynamic Styling Based on Props:**
```javascript
const DynamicDiv = styled.div`
  background: ${props => props.invalid ? 'red' : 'transparent'};
`;
```
Here, `DynamicDiv` adjusts its background based on the `invalid` prop passed to it.

### **4. Note**
Styled components can replace the traditional approach of using class names for dynamic styling. However, it may require a shift in mindset.






## **Git Reference: Media Queries with Styled Components**

### **1. Introduction**
Media queries are essential for responsive design, ensuring that your web application looks good on various device sizes. Styled Components, a popular library in React, can efficiently handle media queries.

### **2. Using Media Queries with Styled Components**

When integrating media queries in Styled Components, the approach is straightforward:

- Define the styles directly inside the media query.
- No need for selectors or nesting unless targeting nested elements or pseudo-selectors.

### **3. Examples**

**a. Default Button Styling for Mobile:**

If you want a button to span the entire width on mobile devices, but only take up the space it needs on larger screens, here's how you'd set it up:

```javascript
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;  // Default width for mobile
  
  @media (min-width: 768px) {  // Media query for larger screens
    width: auto;
  }
`;
```

Usage:

```jsx
<Button>Click Me!</Button>
```

On mobile, this button will span the full width. On larger screens, it will adjust its width based on content.

### **4. Key Takeaways**

- Styled Components make it simple to implement media queries directly, providing a clean way to handle responsive designs.
- You can add your media query criteria directly (`@media (min-width: 768px)`) and then specify styles for when that condition is met.
- It ensures encapsulated styles, so components don't affect others unintentionally.

---

Remember to always test your application on various devices or use browser developer tools to simulate different screen sizes for best results!


## **Git Reference: Using CSS Modules in React**

### **1. Introduction**
CSS Modules is a styling approach that allows you to encapsulate styles at the component level, ensuring no global side effects. It achieves this by generating unique class names for each component.

### **2. Benefits**
- **Separation**: Maintain a clear distinction between JS and CSS.
- **Scoped Styles**: No risk of styles spilling over to other components.
- **Familiarity**: Leverage plain CSS without the need to mix it with JS.

### **3. How to Use**

**a. File Naming:**
CSS Modules requires you to name your CSS files with the `.module.css` extension.

For instance: `Button.module.css`.

**b. Importing Styles:**

You import styles as an object from the CSS module file.

```javascript
import styles from './Button.module.css';
```

**c. Applying Styles:**

Utilize the imported styles object in your JSX. Each class in your CSS becomes a property on this object.

```javascript
<button className={styles.button}>Click Me!</button>
```

### **4. Examples**

**Button.module.css:**
```css
.button {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

**Button.js:**
```javascript
import React from 'react';
import styles from './Button.module.css';

function Button() {
  return (
    <button className={styles.button}>Click Me!</button>
  );
}
```

When rendered, the browser will display a button with a unique class name (e.g., `Button_button_1a2b3c`), which includes styles defined in `Button.module.css`.

### **5. Key Takeaways**
- CSS Modules allows you to combine the best of both worlds: traditional CSS and component-scoped styles.
- Styles are encapsulated and don't bleed out, ensuring consistent and predictable styling.
- It requires specific configuration (but projects created with `create-react-app` have it out of the box).

---

Remember: the unique class names generated by CSS Modules ensure that there's no clash in styles, making component styling more predictable and maintainable.



## **Git Reference: Using CSS Modules in React Components**

### **1. Introduction**
CSS Modules provides a way to scope CSS locally to components, ensuring no class name clashes and keeping CSS separate from JavaScript.

### **2. Setting Up**

**a. Naming Convention**:
Rename your CSS file to follow the `.module.css` pattern, e.g., `CourseInput.module.css`.

**b. Importing Styles**:
To use CSS Modules, you import styles as an object:
```javascript
import styles from './CourseInput.module.css';
```

### **3. Examples**

**a. Applying Class to an Element**:

Suppose you have a `.formControl` class in `CourseInput.module.css`.

Usage in a React component:
```javascript
<div className={styles.formControl}>...</div>
```

**b. Dynamic Classes**:
If you have a dynamic condition to apply styles, you can conditionally add classes:

```javascript
<div className={isValid ? styles.formControl : `${styles.formControl} ${styles.invalid}`}>...</div>
```

**c. Using Media Queries**:
CSS Modules allows normal CSS syntax, including media queries.

In `Button.module.css`:
```css
.button {
  width: 100%;
}

@media (min-width: 768px) {
  .button {
    width: auto;
  }
}
```

In the component:
```javascript
<button className={styles.button}>Click Me!</button>
```

### **4. Key Takeaways**

- **Scoped Styles**: CSS Modules automatically scopes class names, ensuring no unintentional global side-effects.
- **Separation of Concerns**: Allows you to keep the separation between CSS and JavaScript.
- **Media Queries**: Implement media queries as you normally would in CSS; just remember to include the selector.
- **Flexibility**: While the course uses CSS Modules, you can choose between traditional CSS, Styled Components, or CSS Modules based on your preference.

---

Whether you lean towards Styled Components or CSS Modules, the aim is to ensure your React apps are styled in a maintainable and efficient way.




132