import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';
import UserDialog from './UserDialog.js';
import {getCurrentUser,signOut} from './leanCloud';
import AV from './leanCloud';


// test
var Todo = AV.Object.extend('Todo');
// 新建一个 Todo 对象
var todo = new Todo();
todo.set('title', '工程师周会');
todo.set('content', '每周工程师会议，周一下午2点');
todo.save().then(function (todo) {
  // 成功保存之后，执行其他逻辑.
  console.log('New object created with objectId: ' + todo.id);
}, function (error) {
  // 异常处理
  console.error('Failed to create new object, with error message: ' + error.message);
});



class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          user: getCurrentUser()||{},
          newTodo: '',
          todoList:[]
        } 
      }

    render (){
        let todos = this.state.todoList.filter((item)=>!item.deleted).map((item, index) => {
        return (
            <li key={index}>
              <TodoItem todo={item} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/>
            </li>
          )
        })

        return (
            <div className='App'>
                <header>TO DO LIST
                  {this.state.user.id ? <button onClick={this.signOut.bind(this)}><i className='iconfont icon-logout-copy'></i></button> : null}
                </header>
                <div className='dashBoard'>  
                  <p>Hey, {this.state.user.username ||'Friend'} Welcome to list!</p>
                  <i className='iconfont icon-smile-copy'></i>
                </div>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}/>
                </div>
                <ol className='todoList'>
                    {todos}
                </ol>
                {this.state.user.id ? 
                  null:
                  <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this)} onSignIn={this.onSignUpOrSignIn.bind(this)}/>
                  }
            </div>

        )
    }
    componentDidUpdate(){
    }

    signOut(){
      signOut()
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = {}
      this.setState(stateCopy)
    }
    onSignUpOrSignIn(user){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.setState(stateCopy)
    }

    addTodo(event) {
      this.state.todoList.push({
        id: idMaker(),
        title: event.target.value,
        status: null,
        deleted: false
      })
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }

    changeTitle(event){
      this.setState({
        newTodo: event.target.value,
        todoList: this.state.todoList
      })

    }

    toggle(todo,e){
      todo.status=todo.status==='completed'? '':'completed'
      this.setState(this.state)
    }

    delete(todo,e){
      todo.deleted='true'
      this.setState(this.state)
    }
}

let id = 0
function idMaker(){
  id+=1
  return id
}

export default App;

