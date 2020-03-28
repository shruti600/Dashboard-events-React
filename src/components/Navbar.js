import React, { Component } from 'react';
import { IoIosNotifications,IoMdMail } from "react-icons/io";
import {FaAlignJustify} from 'react-icons/fa';
import Login from '../pages/Login';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-main">
                    <div className="nav-side">
                        <button type="button" style={{width:'35px',height:'30px',margin:'auto'}} onClick={this.props.click}>
                            <FaAlignJustify />
                        </button>
                    </div>
                    <div className="nav-name">
                        <h3>Events</h3>
                    </div>
                    <div className="nav-search">
                    <input type="text" placeholder="  Search..." style={{width:'700px',height:'30px'}} />
                    </div>
                    <div className="nav-icon">
                        <IoIosNotifications style={{marginRight:'15px'}}/>
                        <IoMdMail/>
                    </div>
                    <div className="nav-login">
                        <button type="button" style={{width:'150px',height:'35px',margin:'auto',fontSize:'1rem',borderRadius:'8px'}}>
                            <Link to="" style={{textDecoration:'none',textAlign:'right',marginTop:'5px'}}>Support</Link>
                            
                        </button>
                    </div>            
            </div>
        )
    }
}
