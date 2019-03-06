import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';
import UserDialog from './UserDialog.js';
import {getCurrentUser,signOut,TodoModel} from './leanCloud';


class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          user: getCurrentUser()||{},
          newTodo: '',
          todoList:[]
        }

        let user =getCurrentUser() 
        if(user){
          TodoModel.getByUser(user,(todos)=>{
            let stateCopy=JSON.parse(JSON.stringify(this.state))
            stateCopy.todoList=todos
            this.setState(stateCopy)
          })
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

      let newTodo ={
        title: event.target.value,
        status: '',
        deleted: false
      }
      // this.state.todoList.push({
      //   id: idMaker(),
      //   title: event.target.value,
      //   status: null,
      //   deleted: false
      // })
      TodoModel.create(newTodo,(id)=>{
        newTodo.id=id
        this.state.todoList.push(newTodo)
        this.setState({
          newTodo: '',
          todoList: this.state.todoList
        })
      },(error)=>{
        console.log(error)
      })
      // this.setState({
      //   newTodo: '',
      //   todoList: this.state.todoList
      // })
    }

    changeTitle(event){
      this.setState({
        newTodo: event.target.value,
        todoList: this.state.todoList
      })

    }

    toggle(todo,e){
      let oldStatus = todo.status
 
      todo.status=todo.status==='completed'? '':'completed'
      TodoModel.update(todo,()=>{
        this.setState(this.state)
      }, (error) => {
        todo.status = oldStatus
        this.setState(this.state)
      })
    }

    delete(todo,e){
      TodoModel.destory(todo.id,()=>{
        todo.deleted='true'
        this.setState(this.state)
      })
    }
}

// let id = 0
// function idMaker(){
//   id+=1
//   return id
// }

export default App;

