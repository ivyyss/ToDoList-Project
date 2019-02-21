import React from 'react';

export default class TodoItem extends React.Component {
    render () {
        return (<div>
                <input type="checkbox" checked={this.props.todo.status==='completed'} onChange={this.toggle.bind(this)}/>
                {this.props.todo.title}
                <button onClick={this.delete.bind(this)}>Delete</button>
            </div>)
    }

    toggle(e){  
        this.props.onToggle(this.props.todo,e)
    }
    delete(e){
        this.props.onDelete(this.props.todo,e)
    }
}

