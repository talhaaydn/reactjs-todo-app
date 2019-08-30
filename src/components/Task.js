import React, {Component} from 'react';

class Task extends Component {

    render() {
        return(
            <div className="Task">
                <span style={{ textDecoration: this.props.todo.done ? 'line-through' : '' }}>
                    {this.props.todo.value}  
                </span>

                <button onClick={() => this.props.handleClick(this.props.index)}> 
                    { this.props.todo.done ? 'Undo' : 'Complate' }
                </button> 

                <button 
                    style={{ display: this.props.todo.done ? 'inline-block' : 'none' }}
                    onClick={() => this.props.removeClick(this.props.index)}>
                    Remove
                </button>
            </div>
        )
    }
}

export default Task;