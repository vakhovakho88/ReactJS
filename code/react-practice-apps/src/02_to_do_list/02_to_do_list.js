import React from 'react';
import './02_to_do_list.css';


//what do i need
// div container as main container
// input field to add new tasks
// button to add new tasks

// ul should be a list of tasks
// li should be a single task
// button to delete a task for each li
// button to complete a task for each li
// button to edit a task for each li

// I need these React Components
// main contai ner
// ToDoInput
// ToDoList
// ToDoItem


export default function to_do_list_2() {
    return (
        <div className='to-do-list'>
        <h3 className='to-do-list-header'>To Do List</h3>
        <div className='to-do-list-info'>
            <p className='to-do-list-info-text'>To Do List</p>
        </div>
        </div>
    
    )
    }