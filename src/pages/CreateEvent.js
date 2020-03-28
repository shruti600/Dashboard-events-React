import React, { Component } from 'react';
import Login from './Login';
import {Link} from 'react-router-dom';

export default class CreateEvent extends Component {   
    render() {
        return (
            <div className="createEve">
                <div className="createEveRow1">
                    <div className="Evecard">
                        <h4 style={{marginLeft:'30px',marginTop:'20px'}}>Event Information</h4>
                        <div className="blocks">
                            Event Title
                            <input type="text" className="input"/>
                        </div>
                        <div className="blocks">
                            Event Details
                            <input type="text" placeholder="Brief Description" className="input"/>
                        </div>
                        <div className="blocks">
                            Venue
                            <input type="text" className="input"/>
                        </div>
                        <div className="blocks">
                            Event Type
                            <select name="Eve Type" className="input">
                                <option value="Music">Concert</option>
                                <option value="Dance">Dance</option>
                                <option value="Party">Party</option>
                                <option value="Auction">Auction</option>
                                <option value="Conference">Conference</option>
                            </select>
                        </div>
                        <div className="blocks">
                            Price
                            <input type="number" className="input"/>
                        </div>
                        <div className="inblock">
                            <div className="blocks">
                                Date
                                <input type="date" className="input"/>
                            </div>
                            <div className="blocks">
                                Time
                                <input type="time" className="input"/>
                            </div>
                        </div>
                    </div>
                    <div className="Evecard">
                        <h4 style={{marginLeft:'30px',marginTop:'20px'}}>Event Information</h4>
                        <div className="blocks">
                            Event Description
                            <textarea cols="10" className="description"></textarea>
                        </div>
                        <div className="blocks">
                            Available Seats
                            <input type="number" className="input"/>
                            </div>
                        <div className="blocks">
                            Upload Image
                            <button style={{marginTop:'10px',height:'35px',backgroundColor:'grey',fontSize:'15px'}}>Browse</button>
                            <div style={{marginTop:'10px',fontSize:'12px'}}>No file chosen</div>
                        </div>
                    </div>
                    <div className="Evecard">
                        <h4 style={{marginLeft:'30px',marginTop:'20px'}}>Speaker Information</h4>
                        <div className="blocks">
                            Name
                            <input type="text" className="input"/>
                        </div>
                        <div className="blocks">
                            Phone
                            <input type="number" className="input"/>
                        </div>
                        <div className="blocks">
                            E-mail
                            <input type="email" className="input"/>
                        </div>
                        <div className="blocks">
                            Designation
                            <input type="text" className="input"/>
                        </div>
                        <br/>
                        <div className="blocks">
                            <button style={{marginTop:'10px',height:'35px',backgroundColor:'grey',fontSize:'15px'}}>Add Speaker +</button>
                        </div>
                    </div>
                    <div className="Evecard2">
                        <h4 style={{marginLeft:'30px',marginTop:'20px'}}>Sponsors Info</h4>
                        <div className="blocks">
                            <input type="text" className="input"/>
                        </div>
                        <div className="blocks">
                            <button style={{marginTop:'10px',height:'35px',backgroundColor:'grey',fontSize:'15px'}}>Add Sponsors +</button>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="createEveRow2">
                    <button className="createButton">Create Event Now</button>
                
                </div>
            </div>
        )
    }
}
