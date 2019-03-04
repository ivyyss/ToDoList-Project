
import React from 'react';
import './UserDialog.css';
import SignUpForm from './SignUpForm.js';
import SignInForm from './SignInForm.js';
import ForgotPasswordForm from './ForgotPasswordForm.js';
import {signUp,signIn,sendPasswordResetEmail} from './leanCloud.js';

export default class UserDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected: 'signUp',
            selectedTab: 'signInOrSignUp',
            dataForm: {
                email:'',
                username: '',
                password: '',
            }
        }
    }
    render(){
        // let forgotPassword = (
        //     <div className="forgotPassword">
        //       <h3>
        //         RESET PASSWORD
        //       </h3>
        //       <form className="forgotPassword" onSubmit={this.resetPassword.bind(this)}> {/* 登录*/}
        //         <div className="row">
        //           <label>Email</label>
        //           <input type="text" value={this.state.dataForm.email} onChange={this.changeFormData.bind(this,'email')}/>
        //         </div>
        //         <div className="action">
        //           <button type="submit">Send Email</button>
        //           <a href="#" onClick={this.returnToSignIn.bind(this)}>Return to signIn</a>
        //         </div>
        //       </form>              
        //     </div>
        // )

        let signInOrSignUp = (
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
                <SignUpForm dataForm={this.state.dataForm} onSubmit={this.signUp.bind(this)} onChange={this.changeFormData.bind(this)}/>:
                <SignInForm dataForm={this.state.dataForm} onSubmit={this.signIn.bind(this)} onChange={this.changeFormData.bind(this)} onForgotPassword={this.showForgotPassword.bind(this)}/>}
                </div>
            </div>
        )

        return (
            <div className='UserDialog-Wrapper'>
                   {this.state.selectedTab==='signInOrSignUp' ? signInOrSignUp : 
                   <ForgotPasswordForm dataForm={this.state.dataForm} onChange={this.changeFormData.bind(this)} onSubmit={this.resetPassword.bind(this)} onSignIn={this.returnToSignIn.bind(this)}/>
                   }
            </div>
        )
    }
    returnToSignIn(){
        let stateCopy=JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab='signInOrSignUp'
        this.setState(stateCopy)
    }

    showForgotPassword(){
        let stateCopy=JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab='forgotPassword'
        this.setState(stateCopy)
    }
    resetPassword(e){
        e.preventDefault()
        let success=(success)=>{
            alert('Email sent!')
        }
        let error=(error) =>{
            switch(error.code){
                case 400:
                alert('Email not found!')
                break
                default:
                alert(error)
                break
            }
        }
        sendPasswordResetEmail(this.state.dataForm.email,success,error)
    }

    switch(e){
        this.setState(
            {selected: e.target.value}
        )
    }
    signUp(e){
        e.preventDefault()
        let {email,username,password}=this.state.dataForm;
        let success = (user)=> {
            this.props.onSignUp.call(null,user)
            // console.log(user)
        }
        let error = (error)=> {
            switch(error.code){
                case 202:
                alert('Username already existed!')
                break
                case 218:
                alert('Invalid password, it must be a non-blank string.')
                break
                case 217:
                alert('Invalid username, it must be a non-blank string.')
                break
                default:
                alert(error)
                break
            }
        }
        signUp(email,username,password,success,error)
    }
    signIn(e){
        e.preventDefault()
        let {username,password}=this.state.dataForm;
        let success = (user)=> {
            this.props.onSignIn.call(null,user)
        }
        let error = (error)=> {
            switch(error.code){
                case 210:
                alert('Wrong username or password!')
                break
                default:
                alert(error)
                break
            }
        }
        signIn(username,password,success,error)

    }

    // key -> bind(this,key)
    changeFormData(key,e){
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.dataForm[key]=e.target.value
        this.setState(stateCopy)

    }
}