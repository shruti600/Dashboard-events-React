import React, { Component } from 'react';
import Login from './Login';
import EveCalendar from './EveCalendar';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    
    render() {
        
        return (
            <div className="home">
                <h1><div className="welHome"><i>Welcome</i></div></h1>
                <div className="home-but">
                    <div>
                        <Link to="/EveCalendar" style={{textDecoration:'none',color:'white'}}>
                            <button  className="but-1">Events</button>
                        </Link>
                    </div>
                    <div>
                    <Link to="/Login" style={{textDecoration:'none',color:'white',marginLeft:'30px'}}>
                      
                        <button className="but-1" >Login</button>
                        </Link>
        
                    </div>
                </div>
            </div>
        )
    }
}
