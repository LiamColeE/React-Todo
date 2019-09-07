import React from 'react';

class Todo extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const markComplete = () => {
      this.props.markComplete(this.props.task.id);
    }
    return (
      <div>
          <h1 onClick={markComplete}>{this.props.task.task + " " + this.props.task.completed.toString()}</h1>
      </div>
    );
  }
}

export default Todo;
