import React, { Component } from 'react';


export default class SmallHomeCards extends Component {
    render() {
        return (
            <div className="firstHomecard">
                <div className="firstcardIn">
                    <div className="firstcardicon">
                        {this.props.icon}
                    </div>
                    <div className="firstcardtext">
                        <b>{this.props.number}</b>
                        <br/>
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}
