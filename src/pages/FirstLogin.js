import React, { Component } from 'react';
import Login from '../pages/Login';
import {Link} from 'react-router-dom';


export default class FirstLogin extends Component {
    render() {
        return (
            <div className="home">
                <h1><div className="welHome"><i style={{fontSize:'40px'}}>You need to login to create an event</i></div></h1>
                <div className="home-but">
                    <div>
                        <Link to="/Login" style={{textDecoration:'none',color:'white'}}>
                            <button  className="but-1">Login</button>
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
