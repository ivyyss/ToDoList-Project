
import React from 'react';
import './UserDialog.css';

export default class UserDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected: 'signUp',
            dataForm: {
                username: '',
                password: ''
            }
        }
    }

    switch(e){
        this.setState(
            {selected: e.target.value}
        )
    }
    signUp(e){}
    signIn(e){}

    // key -> bind(this. key)
    changeFormData(key,e){
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.dataForm[key]=e.target.value
        this.setState(stateCopy)

    }

    // changeUsername(e){
    //     let stateCopy = JSON.parse(JSON.stringify(this.state))
    //     stateCopy.dataForm.username=e.target.value
    //     this.setState(stateCopy)
    // }
    // changePassword(e){
    //     let stateCopy = JSON.parse(JSON.stringify(this.state))
    //     stateCopy.dataForm.password=e.target.value
    //     this.setState(stateCopy)
    // }

    render(){
        let signUpForm =(
            <form className='signUp' onSubmit={this.signUp.bind(this)}>
                <div className='row'>
                    <label>E-mail</label>
                    <input type='text'/>
                </div>
                <div className='row'>
                    <label>Username</label>
                    <input type='text' value={this.state.dataForm.username} onChange={this.changeFormData.bind(this,'username')}/>
                </div>
                <div className='row'>
                    <label>Password</label>
                    <input type='password' value={this.state.dataForm.password} onChange={this.changeFormData.bind(this,'password')}/>
                </div>
                <div className='row action'>
                    <button>SIGNUP</button>
                </div>
            </form>
        )
        let signInForm = (
            <form className='signIn' onSubmit={this.signIn.bind(this)}>
                <div className='row'>
                    <label>Username</label>
                    <input type='text' value={this.state.dataForm.username} onChange={this.changeFormData.bind(this,'username')}/>
                </div>
                <div className='row'>
                    <label>Password</label>
                    <input type='password' value={this.state.dataForm.password} onChange={this.changeFormData.bind(this,'password')}/>
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
                        <label><input type='radio' value='signUp' checked={this.state.selected==='signUp'}/>SIGN UP</label>
                        <label><input type='radio' value='signIn' checked={this.state.selected==='signIn'}/>SIGN IN</label>                  
                    </nav>
                    <div className='panel'>
                       {this.state.selected==='signUp'? signUpForm : signInForm}
                    </div>
                </div>
            </div>
        )
    }
}