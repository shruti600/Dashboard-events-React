import React, { Component } from 'react';
import {MdPerson} from "react-icons/md";
import SignUp from './SignUp';
import AfterLogin from './AfterLogin'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    
    render() {
        return (
            <div className="login-page">
                <div className="login-icon-round"></div>
                <MdPerson className="login-icon"/>
                <div className="login-box">
                    <form onSubmit={this.handleSubmit} noValidate>
                    <h6>Username</h6>
                    <input type="text" placeholder="Username" required="required" style={{height:'40px',padding:'5px',marginTop:'-10px',marginBottom:'15px',width:'100%'}} />


                    <h6>Password</h6>
                    <input type="Password" name="password" placeholder="Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required="required" style={{height:'40px',padding:'5px',marginTop:'-10px',marginBottom:'15px',width:'100%'}} />
                

                    <h6>Role</h6>
                    <select style={{height:'40px',padding:'5px',marginTop:'-10px',marginBottom:'15px',width:'100%'}} required="required">
                        <option value="Organiser">Organiser</option>
                        <option value="Audience">Audience</option>
                    </select>
                    <div className="f">
                        <input type="checkbox" name="check-box" style={{marginTop:'auto',marginBottom:'auto'}} />
                        <div style={{marginLeft:'5px',fontSize:'15px'}}>Remember Password</div>
                    </div>
                    
                    <Link to="/AfterLogin"><button className="log-sub ">Submit</button></Link>
                    </form>
                    <a href="#" style={{textDecoration:'none',fontSize:'14px',textAlign:'right',color:'white',marginTop:'5px'}}>Forget Password</a>
                </div>
                <div className="log-sign">
                Don't have an account ?
                    <Link to="/SignUp" style={{textDecoration:'none',textAlign:'right',color:'blue',marginTop:'5px'}}>SignUp </Link>
                </div>
            </div>
        );
    }
}
