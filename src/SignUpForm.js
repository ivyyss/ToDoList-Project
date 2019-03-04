import React from 'react';

export default class SignUpForm extends React.Component{
    render(){
        return (
        <form className='signUp' onSubmit={this.props.onSubmit.bind(this)}>
            <div className='row'>
                <label>Email</label>
                <input type='text' value={this.props.dataForm.email} onChange={this.props.onChange.bind(null,'email')}/>
            </div>
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
            </div>
        </form>
        )
    }
}