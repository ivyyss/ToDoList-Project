import React from 'react';

class Application extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            newTodo: 'test',
            todoList: [{id:1, title: '我的待办'}]
        }
    }
    render (){
        let todos = this.state.todoList.map((item, index) => {
            return <li>item.title</li>
        })

        return (
            <div className='application'>
                <h1>我的待办</h1>
                <div className='inputWrapper' >
                    <input type='text' value={this.state.newTodo} />
                </div>
                <ul>
                    {todos}
                </ul>
            </div>

        )
    }
}

export default Application;