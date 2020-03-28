import React, { Component } from 'react';
import Hero from '../components/Hero';
import Descrip from '../components/Descrip';

export default class EveDes extends Component {
    render() {
        return (
            <>
                <Hero/>
                <br/>
                <h1 style={{marginLeft:'50px',color:'#882BCF',fontFamily:'Palatino Linotype, Book Antiqua, Palatino, serif'}}><i>Event Name</i></h1>
                <br/>
                <Descrip/>
            </>
        )
    }
}
