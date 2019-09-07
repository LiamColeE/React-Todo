import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks:
      [
      {
        task: "stuff1",
        id: "1",
        completed: false
      },
      {
        task: "stuff2",
        id: "2",
        completed: false
      },
      {
        task: "stuff3",
        id: "3",
        completed: false
      }
    ]};
  }

  markComplete = (id) => {
    let arr = this.state.tasks;

    arr.find((element) => {
      return element.id == id
    }).completed = !arr.find((element) => {
      return element.id == id
    }).completed;
    

    console.log(arr);

    this.setState([arr]);
  }

  AddItem = (task) => {
    let arr = this.state.tasks;
    arr.push({
      task: task,
      id:Math.random() * 20000,
      completed:false
    });
    this.setState([arr])
  }

  removeComplete = () =>{
    console.log("remove");
    let arr = [];
    this.state.tasks.forEach((task)=>{
      if(task.completed == false){
        arr.push(task);
      }
    });
    console.log(arr);
    this.setState({tasks:arr});
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm AddItem={this.AddItem.bind(this)} removeComplete={this.removeComplete}/>
        <TodoList list={this.state.tasks} markComplete={this.markComplete.bind(this)}/>
      </div>
    );
  }
}

export default App;
