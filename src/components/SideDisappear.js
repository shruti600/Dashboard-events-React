import React, { Component } from 'react'

export default class SideDisappear extends Component {
    render() {
        return (
            <div className="sideGone" onClick={this.props.click}/>    
        )
    }
}
