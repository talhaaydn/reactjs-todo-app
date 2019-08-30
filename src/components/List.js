import React, {Component} from 'react';

import Task from './Task';

class List extends Component {

    render() {
        return(
            <div className="List">
                {this.props.todos.map((todo,index) => {
                    return (
                        <Task 
                            key={index} 
                            todo={todo} 
                            index={index}
                            handleClick = {this.props.handleClick}
                            removeClick = {this.props.removeClick}
                        />
                    )
                })}
            </div>
        )
    }
}

export default List;