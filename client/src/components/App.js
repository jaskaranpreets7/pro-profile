import React, { Component } from 'react';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import firebase from 'firebase'
import { config } from "../common/firebase.js";


class App extends Component{
  componentDidMount(){
    firebase.initializeApp(config)
  }
  render(){
    return (
      <div className="app-container">
        <ProfilePicture/>
        <ProfileDetails/>
      </div>
    );
  }
}

export default App;
