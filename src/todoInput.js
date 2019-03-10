import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    render (){
        return <input type='text' placeholder="Type your plan here!" value={this.props.content} onKeyPress={this.submit.bind(this)} onChange={this.changeTitle.bind(this)}/>
    }
    submit (e){
        if(e.key==='Enter') {
            if(e.target.value.trim()!==''){
                this.props.onSubmit(e)
            }
        }     
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}