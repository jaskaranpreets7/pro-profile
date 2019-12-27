import React, { useState ,Fragment } from 'react'
import '../style/ProfilePicture.css';

export default function ProfilePicture() {
    const [profilePic , setProfilePic] = useState('')
    const handlePhoto = (event) =>{
        let uploadedImg = (event !==null) ? URL.createObjectURL(event.target.files[0]) :''
        setProfilePic(uploadedImg)
    }
    return (
        <Fragment>
            <div className="profile-container">
                <div className="profile-picture">
                    {profilePic.length === 0 ? '': <img alt="Profile Pic" src={profilePic}/>}
                </div>
                <div className="upload-button">
                    <input type="file"  id="file" onChange={(e)=>handlePhoto(e)}/>
                    <label htmlFor="file">Upload Picture</label>
                </div>
            </div>

        </Fragment>

    )
}
