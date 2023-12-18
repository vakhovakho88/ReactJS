### Exercise: To-Do List App

**Objective**: Create a simple to-do list application where users can add tasks, mark them as completed, and delete them. This exercise will help you practice state management, handling user input, and basic React component structure.

**Requirements**:

1. **Task Input**: A text input field where users can type the name of a new task.
2. **Add Button**: A button to add the new task to the list.
3. **Task List Display**: A section to display the list of tasks.
4. **Mark as Completed**: Each task should have a checkbox. When checked, the task should visually appear as completed (e.g., strike-through text).
5. **Delete Option**: An option to delete a task from the list.

**Steps**:

1. **Setup**: Create a new React app using Create React App.
2. **State Management**: Use the `useState` hook to manage the tasks array and the current input value.
3. **Task Input and Button**: Implement the input field and the button to add tasks. Update the tasks state when a new task is added.
4. **Display Tasks**: Render the list of tasks, each with a checkbox and a delete button.
5. **Handle Task Completion**: Implement functionality to mark a task as completed. This could involve updating the task's state when the checkbox is toggled.
6. **Delete Tasks**: Allow users to delete tasks from the list.

**Bonus Challenges**:

- Implement task persistence using `localStorage`.
- Add a "Clear Completed" button to remove all completed tasks at once.
- Include animations for adding or removing tasks.

This exercise offers a balanced challenge in handling user input, managing state, and dynamically updating the UI, all fundamental aspects of React development. Once you complete it, you can share your code for review and improvement suggestions.