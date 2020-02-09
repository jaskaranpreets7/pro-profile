import React, { Component } from 'react';
import '../style/App.css';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import firebase from 'firebase'
import { config } from "../common/firebase.js";
import ProfileContent from './ProfileContent';
import Button from './Button';


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
  toLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/jaskaranpreet-singh/'
  }
  toGithub = () => {
    window.location.href = 'https://github.com/jaskaranpreets7?tab=repositories'
  }
  render(){
    return (
      <div className="app-container">
        <div className="app-profile-wrapper" >
          <ProfilePicture uploadedImage={this.uploadedImage} img={this.state.img}/>
          <div className="button-container">
            <Button className={"fab fa-github"} handleClick={this.toGithub}/>
            <Button className={"fab fa-linkedin"} handleClick={this.toLinkedin}/>
          </div>
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
