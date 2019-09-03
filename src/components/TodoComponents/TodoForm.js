import React from 'react';

const TodoForm = props => {
    return (
        <form className="form" onSubmit={props.addTodo}>
            <input 
            type="text" 
            placeholder=".....what do u need done?"
            value={props.task}
            name="task"
            onChange={props.handleChanges}
            >
            </input>
            <div className="hi">
            <button onClick={props.addTodo}>Add 2 list</button>
            <button onClick={props.clearCompleted}>Clear Completed task</button>
             </div>
        </form>
    );
}

export default TodoForm;