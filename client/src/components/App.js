import React, { Component } from 'react';
import '../style/App.css';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import firebase from 'firebase'
import axios from "axios"
import { config } from "../common/firebase.js";
import ProfileContent from './ProfileContent';
import Button from './Button';


class App extends Component{
  constructor(props){
    super()
    this.state = {
      userProfileData:{},
      imgKey : '',
      img : '',
      userProfileContent:{}
    }
  }

  componentDidMount(){
    firebase.initializeApp(config)
    this.fetchUserProfile()
    setTimeout(()=>{
      this.getProfilePic()
    },1000)
  }

  fetchUserProfile = async() => {
    await axios.get('https://pro-profile-fb2e2.firebaseio.com/0.json')
      .then((response)=>{
        this.setState({
          userProfileData : response.data.user_profile,
          imgKey : response.data.image_key,
          userProfileContent :response.data
        })
      }).catch((error)=>{
        console.log('Error in fetch userProfile', error)
      })
  }
  
  uploadedImage = (event) => {
    const storage = firebase.storage()
    const image = event.target.files[0]
    localStorage.setItem('image', image.name)
    storage.ref(`images/${image.name}`).put(image)
  }

  getProfilePic = () => {
    const storage = firebase.storage()
    if(this.state.imgKey.length > 0 ){
        storage.ref('images').child(this.state.imgKey).getDownloadURL()
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
          <ProfilePicture uploadedImage={this.uploadedImage}  userProfileData={this.state.userProfileData} img={this.state.img}/>
          <div className="button-container">
            <Button className={"fab fa-github"} handleClick={this.toGithub}/>
            <Button className={"fab fa-linkedin"} handleClick={this.toLinkedin}/>
          </div>
          <ProfileDetails userProfileData={this.state.userProfileData}/>
        </div>
        <div>
          <ProfileContent userProfileContent={this.state.userProfileContent}/>
        </div>
      </div>
    );
  }
}

export default App;
