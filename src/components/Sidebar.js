import React, { Component } from 'react';
import { FaClipboardList,FaCalendarAlt} from "react-icons/fa";
import { MdDashboard,MdEvent,MdPerson,MdAttachMoney,MdEventNote } from "react-icons/md";
import { IoIosLock,IoMdSettings,IoIosArrowForward } from "react-icons/io";
import EveDes from '../pages/EveDes';
import Login from '../pages/Login';
import CreateEvent from '../pages/CreateEvent';
import EveCalendar from '../pages/EveCalendar';
import Home from '../pages/Home';
import FirstLogin from '../pages/FirstLogin';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component { 
    render() {
        let sideclasses='side';
        if(this.props.show){
            sideclasses='side open'
        }
        return (
            <div className={sideclasses}>
                <div className="side-head">
                    <FaClipboardList style={{marginTop:'auto',marginBottom:'auto',marginLeft:'15px'}}/>
                    <div style={{marginTop:'auto',marginBottom:'auto',marginLeft:'15px'}}>Event Task</div>
                </div> 
                <div className="side-content">
                    <div className="side-space"></div>
                    <div className="side-in">
                        <Link to="/" className="side-in" style={{textDecoration:'none',color:'white'}}>
                        <div className="side-in-1">
                            <MdDashboard/>     
                        </div>
                        <div className="side-in-2">
                            Dashboard                    
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                        </Link>
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <Link to="/EveDes" className="side-in" style={{textDecoration:'none',color:'white'}}>
                        <div className="side-in-1">
                            <MdEvent/>     
                        </div>
                        <div className="side-in-2">
                            Events
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                        </Link>
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <Link to="/FirstLogin" className="side-in" style={{textDecoration:'none',color:'white'}}>
                        <div className="side-in-1">
                            <MdEventNote/>     
                        </div>
                        <div className="side-in-2">
                            Create Event
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                        </Link>
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <div className="side-in-1">
                            <MdAttachMoney/>     
                        </div>
                        <div className="side-in-2">
                            Payment
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <Link to="/EveCalendar" className="side-in" style={{textDecoration:'none',color:'white'}}>
                        <div className="side-in-1">
                            <FaCalendarAlt/>     
                        </div>
                        <div className="side-in-2">
                            Calendar
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                        </Link>
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <div className="side-in-1">
                            <MdPerson/>     
                        </div>
                        <div className="side-in-2">
                            Profile
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>   
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <Link to="/Login" className="side-in" style={{textDecoration:'none',color:'white'}}>
                        <div className="side-in-1">
                            <IoIosLock/>
                        </div>
                        <div className="side-in-2">
                            Login
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                        </Link>         
                    </div>
                    <div className="side-space"></div>
                    <div className="side-in">
                        <div className="side-in-1">
                            <IoMdSettings />
                        </div>
                        <div className="side-in-2">
                            Settings
                        </div>
                        <div className="side-in-3">
                            <IoIosArrowForward/>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}
