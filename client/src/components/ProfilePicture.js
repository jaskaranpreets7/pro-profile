import React, { useState ,Fragment } from 'react'
import '../style/profilePicture.scss';

export default function ProfilePicture(props) {
    const [profilePic , setProfilePic] = useState('')
    const handlePhoto = (event) =>{
        let uploadedImg = (event !==null) ? URL.createObjectURL(event.target.files[0]) :''
        props.uploadedImage(event)
        setProfilePic(uploadedImg)
    }

    return (
        <Fragment>
            <div className="profile-container">
                <div className="profile-picture">
                    {profilePic.length === 0 ? <img alt="Profile Pic" src={props.img}/>: <img alt="Profile Pic" src={profilePic}/>}
                </div>
                {props.userProfileData.uploadButtonState === 'Y' ?
                    <div className="upload-button">
                        <input type="file" id="file" onChange={handlePhoto}/>
                        <label htmlFor="file">Upload</label>
                    </div> : null
                }
            </div>
        </Fragment>

    )
}
