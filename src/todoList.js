import React from 'react';
import TodoInput from './todoInput.js';
import TodoItem from './TodoItem.js';

class Application extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            newTodo: 'test',
            todoList: [
                {id:1, title: '我的待办1'},
                {id:2, title: '我的待办2'}
            ]
        }
    }
    render (){
        let todos = this.state.todoList.map((item, index) => {
        return (<li>><TodoItem todo={item}/></li>)
        })

        return (
            <div className='application'>
                <h1>我的待办</h1>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} />
                </div>
                <ol>
                    {todos}
                </ol>
            </div>

        )
    }
}

export default Application;