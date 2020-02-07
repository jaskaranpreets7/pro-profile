import React, { Component } from 'react';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import firebase from 'firebase'
import { config } from "../common/firebase.js";
import ProfileContent from './ProfileContent';


class App extends Component{
  constructor(props){
    super()
    this.state = {
      img : ''
    }
  }
  componentDidMount(){
    firebase.initializeApp(config)
    this.getProfilePic()
  }

  uploadedImage = (event) => {
    const storage = firebase.storage()
    const image = event.target.files[0]
    localStorage.setItem('image', image.name)
    storage.ref(`images/${image.name}`).put(image)
  }

  getProfilePic = () => {
    let reterivedImg = localStorage.getItem('image')
    if(reterivedImg.length > 0 ){
      const storage = firebase.storage()
      storage.ref('images').child(reterivedImg).getDownloadURL()
        .then((img)=>{
          this.setState({
            img : img
          })
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
  render(){
    return (
      <div className="app-container">
        <div className="app-profile-wrapper" >
          <ProfilePicture uploadedImage={this.uploadedImage} img={this.state.img}/>
          <ProfileDetails/>
        </div>
        <div>
          <ProfileContent/>
        </div>
      </div>
    );
  }
}

export default App;
