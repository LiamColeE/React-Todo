import React from 'react';

class TodoForm extends React.Component {
    // you will need a place to store your state in this component.
    constructor() {
        super();
        this.state = {
            taskName: ""
        }
    }

    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        const AddItem = () => {
            this.props.AddItem(this.state.taskName)
        }
        const updateInput = (event) => {
            console.log(event.target.value)
            this.setState({taskName: event.target.value});
        }
        const removeComplete = (event) => {
            console.log()
            this.props.removeComplete();
        }

        return (
            <div>
                <input onChange={updateInput}/>
                <button onClick={AddItem}>Submit</button>
                <button onClick={removeComplete}>Remove Complete Items</button>
            </div>
        );
    }
}

export default TodoForm;
