
import React from 'react';
import './UserDialog.css';

export default class UserDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected: 'signUp'
        }
    }

    switch(e){
        this.setState(
            {selected: e.target.value}
        )
    }

    render(){
        let signUpForm =(
            <form className='signUp'>
                <div className='row'>
                    <label>E-mail</label>
                    <input type='text'></input>
                </div>
                <div className='row'>
                    <label>Username</label>
                    <input type='text'></input>
                </div>
                <div className='row'>
                    <label>Password</label>
                    <input type='password'></input>
                </div>
                <div className='row action'>
                    <button>SIGNUP</button>
                </div>
            </form>
        )
        let signInForm = (
            <form className='signIn'>
                <div className='row'>
                    <label>Username</label>
                    <input type='text'></input>
                </div>
                <div className='row'>
                    <label>Password</label>
                    <input type='password'></input>
                </div>
                <div className='row action'>
                    <button>SIGNIN</button>
                </div>
            </form>
        )

        return (
            <div className='UserDialog-Wrapper'>
                <div className='userDialog'>
                    <nav onChange={this.switch.bind(this)}>
                        <input type='radio' value='signUp' checked={this.state.selected==='signUp'}/>SIGN UP
                        <input type='radio' value='signIn' checked={this.state.selected==='signIn'}/>SIGN IN                   
                    </nav>
                    <div className='panel'>
                       {this.state.selected==='signUp'? signUpForm : signInForm}
                    </div>
                </div>
            </div>
        )
    }
}