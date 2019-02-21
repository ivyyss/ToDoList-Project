import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';

class App extends React.Component {
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
        return (<li><TodoItem todo={item}/></li>)
        })

        return (
            <div className='App'>
                <h1>我的待办</h1>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} onSubmit={this.addTodo} />
                </div>
                <ol>
                    {todos}
                </ol>
            </div>

        )
    }
    addTodo() {
      console.log('需要添加一个todo')
    }
}

export default App;
