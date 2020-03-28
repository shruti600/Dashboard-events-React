import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="createEveRow1">
                    <div className="Evecard sign">
                        <h4>Account Info</h4>
                        <div>First Name</div>
                        <input type="text" className="input"  style={{  marginBottom:'5px',width:'100%'}}/>
                        <div>Last Name</div>
                        <input type="text" className="input"  style={{marginBottom:'5px',width:'100%'}}/>
                        <div>Password</div>
                        <input type="Password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required="required" className="input" style={{marginBottom:'5px',width:'100%'}}/>
                        <div>Retype Password</div>
                        <input type="Password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required="required" className="input" style={{marginBottom:'5px',width:'100%'}}/>
                        <div>E-mail</div>
                        <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required="required" className="input" style={{marginBottom:'5px',width:'100%'}}/>
                        <div>Phone</div>
                        <input type="number" required="required" className="input" style={{marginBottom:'5px',width:'100%'}} />
                        <div>Address</div>
                        <input type="text" required="required" className="input" style={{marginBottom:'5px',width:'100%'}} />
                        

                    </div>
                    <div className="Evecard sign">
                        <h4>More Info</h4>
                        <div>Gender</div>
                        <select className="input" style={{marginBottom:'5px',width:'100%'}}>
                            <option value="Female">Female</option>
                            <option value="male">Male</option>
                            <option value="Others">Others</option>
                        </select>
                        <div>Role</div>
                        <select className="input" style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}>
                            <option value="Organiser">Organiser</option>
                            <option value="Audience">Audience</option>
                        </select>
                        <div>Description</div>
                        <input type="text" className="input"  style={{marginTop:'5px',marginBottom:'5px',width:'100%',height:'100px'}}/>
                        <div>Upload Image</div>
                        <button style={{marginTop:'10px',height:'35px',backgroundColor:'grey',fontSize:'15px',width:'150px',border:'none'}}>Browse</button>
                        <br/>
                        <br/>
                        <br/>
                        <button style={{marginTop:'10px',height:'35px',backgroundColor:'grey',fontSize:'15px',width:'100%',backgroundColor:'orange',height:'40px',border:'none'}}>Create Account</button>

                    </div>
                </div>
            </div>
        )
    }
}
