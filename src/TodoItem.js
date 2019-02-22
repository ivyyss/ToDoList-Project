import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    render () {
        return (<div className='itemList'>
                <input type="checkbox" id={this.props.todo.id} checked={this.props.todo.status==='completed'} onChange={this.toggle.bind(this)}/>
                <label for={this.props.todo.id}></label>
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

