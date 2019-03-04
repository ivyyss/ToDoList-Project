import React from 'react';

export default class ForgotPasswordForm extends React.Component{
    render(){
        return (
            <div className="forgotPassword">
            <h3>
              RESET PASSWORD
            </h3>
            <form className="forgotPassword" onSubmit={this.props.onSubmit.bind(this)}> {/* 登录*/}
              <div className="row">
                <label>Email</label>
                <input type="text" value={this.props.dataForm.email} onChange={this.props.onChange.bind(null,'email')}/>
              </div>
              <div className="action">
                <button type="submit">Send Email</button>
                <a href="#" onClick={this.props.onSignIn.bind(this)}>Return to sign-in</a>
              </div>
            </form>              
          </div>
        )
    }
}