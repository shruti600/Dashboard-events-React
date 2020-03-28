import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import H1 from '../components/H1';
import { FiMoreHorizontal} from "react-icons/fi";

export default class EveCalendar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'rgb(221, 221, 231)'}}>
            <H1/>
            <br/>
            <div className="cal1">
                <h2>Events List</h2>
                <div>
                    <button style={{borderRadius:'50px',fontSize:'18px',marginRight:'10px',width:'20%',height:'30px',border:'none'}}>Today</button>
                    <button style={{borderRadius:'50px',fontSize:'18px',marginRight:'10px',width:'20%',height:'30px',border:'none'}}>This week</button>
                    <button style={{borderRadius:'50px',fontSize:'18px',marginRight:'10px',width:'20%',height:'30px',border:'none'}}>This Month</button>
                    <button style={{borderRadius:'50px',fontSize:'18px',marginRight:'10px',width:'20%',height:'30px',border:'none'}}>This Year</button>
                </div>
                <br/>
                <div className="side-content">
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                            20th April 2020     
                        </div>
                        <div className="cal4">
                            5pm Onwards                   
                        </div>
                        <div className="cal5">
                            Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        30th April 2020
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                        Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        30th April 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                        Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        5th May 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                        Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        10th June 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                        Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        15th June 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                        Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        18th June 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                            Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        30th June 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                            Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        12th July 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                            Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                    <div className="cal2"></div>
                    <div className="cal3">
                        <Link to="/EveDes" className="cal3" style={{textDecoration:'none',color:'white'}}>
                        <div className="cal4">
                        18th July 2020     
                        </div>
                        <div className="cal4">
                        5pm Onwards                   
                        </div>
                        <div className="cal5">
                            Event Name
                        </div>
                        <div className="cal6" style={{right:'0px'}}>
                            <FiMoreHorizontal/>
                        </div>
                        </Link>
                    </div>
                </div>
                <br/>    
            </div>
            </div>
        )
    }
}
