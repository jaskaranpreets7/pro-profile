import React, { useState ,Fragment } from 'react'
import '../style/ProfilePicture.css';
import axios from 'axios'


export default function ProfilePicture() {
    const [profilePic , setProfilePic] = useState('')
    const handlePhoto = (event) =>{
        let uploadedImg = (event !==null) ? URL.createObjectURL(event.target.files[0]) :''
        uploadedImage()
        setProfilePic(uploadedImg)
    }

    const uploadedImage = () => {
        axios.post(`${process.env.REACT_APP_DATABASE_URL}/profile.json` , {image:profilePic})
    }
    return (
        <Fragment>
            <div className="profile-container">
                <div className="profile-picture">
                    {profilePic.length === 0 ? '': <img alt="Profile Pic" src={profilePic}/>}
                </div>
                <div className="upload-button">
                    <input type="file" id="file" onChange={handlePhoto}/>
                    <label htmlFor="file">Upload Picture</label>
                </div>
            </div>

        </Fragment>

    )
}
