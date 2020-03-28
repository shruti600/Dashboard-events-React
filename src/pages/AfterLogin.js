import React, { Component } from 'react'
import CreateEvent from './CreateEvent';
import {Link} from 'react-router-dom';
import EveCalendar from '../pages/EveCalendar';
import Home from './Home';

export default class AfterLogin extends Component {
    render() {
        return (
            <div className="home">
                <h1><div className="welHome"><i>Hi , John</i></div></h1>
                <div className="home-but">
                    <div>
                        <Link to="/CreateEvent" style={{textDecoration:'none',color:'white'}}>
                            <button  className="but-1">Create Event</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" style={{textDecoration:'none',color:'white',marginLeft:'30px'}}>
                            <button  className="but-1">Back</button>
                        </Link>
                    </div>
            
                </div>
            </div>
        )
    }
}
