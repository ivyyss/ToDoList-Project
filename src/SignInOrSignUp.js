import React from 'react';
import SignUpForm from './SignUpForm.js';
import SignInForm from './SignInForm.js';

export default class SignInOrSignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:'signUp'
        }
    }
    render(){
        return (
            <div className='signInOrSignUp userDialog'>
            <nav>
                <div>
                    <input type='radio' id='Up' value='signUp' checked={this.state.selected==='signUp'} onChange={this.switch.bind(this)}/>SIGN UP
                    <label htmlFor='Up'></label>
                </div>
                <div>
                    <input type='radio' id='In' value='signIn' checked={this.state.selected==='signIn'} onChange={this.switch.bind(this)}/>SIGN IN
                    <label htmlFor='In'></label>               
                </div>
            </nav>
            <div className='panel'>
            {this.state.selected==='signUp'? 
            <SignUpForm dataForm={this.props.dataForm} onSubmit={this.props.onSignUp.bind(this)} onChange={this.props.onChange.bind(this)}/>:
            <SignInForm dataForm={this.props.dataForm} onSubmit={this.props.onSignIn.bind(this)} onChange={this.props.onChange.bind(this)} onForgotPassword={this.props.onForgotPassword.bind(this)}/>}
            </div>
            </div>
        )
    }

    switch(e){
        this.setState(
            {selected: e.target.value}
        )
    }
}