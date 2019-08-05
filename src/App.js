import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      dos: [ {
        task: "",
        id: Date.now(),
        completed: false
        }
      ]
    };
  }


  toggleCompleted = itemId => {
    this.setState({
      dos: this.state.dos.map(item => {
        if (itemId === item.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    })
 }

  addTodo = event => {
    event.preventDefault();
    const newDos = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      dos: [...this.state.dos, newDos],
      task:"",
    })
  }

  clearCompleted = e => {
    this.setState({
      dos: this.state.dos.filter(item => !item.completed)
    });
  }


 handleChanges = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
 }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
