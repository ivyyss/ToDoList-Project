
import React from 'react';
import './UserDialog.css';

export default class UserDialog extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='userDialog'>
                <nav>
                    <label>SIGN UP</label>
                    <label>SIGN IN</label>
                </nav>
                <div className='panel'>
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
                </div>
            </div>
        )
    }
}