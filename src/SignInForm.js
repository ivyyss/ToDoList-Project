import React from 'react';

export default class SignInForm extends React.Component{
    render(){
        return (
            <form className='signIn' onSubmit={this.props.onSubmit.bind(this)}>
                <div className='row'>
                    <label>Username</label>
                    <input type='text' value={this.props.dataForm.username} onChange={this.props.onChange.bind(null,'username')}/>
                </div>
                <div className='row'>
                    <label>Password</label>
                    <input type='password' value={this.props.dataForm.password} onChange={this.props.onChange.bind(null,'password')}/>
                </div>
                <div className='action'>
                    <button>Submit</button>
                    <a href="#" onClick={this.props.onForgotPassword.bind(this)}>Forget your password？</a>
                </div>
            </form>
        )
    }
}