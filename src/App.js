import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideDisappear from './components/SideDisappear';
import CreateEvent from './pages/CreateEvent';
import Home from './pages/Home';
import EveDes from './pages/EveDes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EveCalendar from './pages/EveCalendar';
import AfterLogin from './pages/AfterLogin';
import FirstLogin from './pages/FirstLogin';
import {Switch,Route} from 'react-router-dom';
import NotFound from './pages/NotFound';

export default class App extends Component {
  state={
    isOpen:false,
  };
  sideHandle=()=>{
    this.setState((prevState)=>{
      return{ isOpen : !prevState.isOpen};
    });
  };
  sideWithdraw=()=>{
    this.setState({isOpen:false});
  };
  render() {
    const isOpen=this.state.isOpen;
    let disappear;
    if(isOpen)
    {
      disappear=<SideDisappear click={this.sideWithdraw}/>
    }
    return (
      <div>
        <Navbar click={this.sideHandle}/>
        <Sidebar show={this.state.isOpen}/>
        {disappear}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/CreateEvent" component={CreateEvent} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/EveDes" component={EveDes} />
          <Route path="/AfterLogin" component={AfterLogin} />
          <Route path="/EveCalendar" component={EveCalendar} />
          <Route path="/FirstLogin" component={FirstLogin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
