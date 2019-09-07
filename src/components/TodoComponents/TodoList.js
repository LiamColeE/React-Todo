import React from 'react';
import Todo from "./Todo"

class TodoList extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        {
            this.props.list.map(item => {return <Todo key={item.id} task={item} markComplete={this.props.markComplete}/>})
        }
      </div>
    );
  }
}

export default TodoList;