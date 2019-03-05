
import React from 'react';
import './UserDialog.css';
import SignInOrSignUp from './SignInOrSignUp.js';
import ForgotPasswordForm from './ForgotPasswordForm.js';
import {signUp,signIn,sendPasswordResetEmail} from './leanCloud.js';

export default class UserDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'signInOrSignUp',
            dataForm: {
                email:'',
                username: '',
                password: '',
            }
        }
    }
    render(){
        return (
            <div className='UserDialog-Wrapper'>
                   {this.state.selectedTab==='signInOrSignUp' ? <SignInOrSignUp dataForm={this.state.dataForm} onSignIn={this.signIn.bind(this)} onSignUp={this.signUp.bind(this)} onChange={this.changeFormData.bind(this)} onForgotPassword={this.showForgotPassword.bind(this)}/> : 
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