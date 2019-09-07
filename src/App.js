import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks:
      [
      {
        task: "stuff1",
        id: "12345",
        completed: false
      },
      {
        task: "stuff2",
        id: "123456",
        completed: false
      },
      {
        task: "stuff3",
        id: "1234567",
        completed: false
      }
    ]};
  }

  markComplete = (id) => {
    const arr = this.state.tasks;

    arr.find((element) => {
      return element.id == id
    }).completed = !arr.find((element) => {
      return element.id == id
    }).completed;
    

    console.log(arr);

    this.setState([arr]);
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList list={this.state.tasks} markComplete={this.markComplete.bind(this)}/>
      </div>
    );
  }
}

export default App;
