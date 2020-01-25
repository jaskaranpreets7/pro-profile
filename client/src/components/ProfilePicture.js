import React, { useState ,Fragment } from 'react'
import '../style/ProfilePicture.css';
import axios from 'axios'


export default function ProfilePicture() {
    const [rawImage, setRawImage] = useState('')
    const [profilePic , setProfilePic] = useState('')
    const handlePhoto = (event) =>{
        let uploadedImg = (event !==null) ? URL.createObjectURL(event.target.files[0]) :''
        uploadedImage()
        setProfilePic(uploadedImg)
        setRawImage(event.target.files[0])
    }

    const uploadedImage = () => {
        const getBase64Image = (img) => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        let dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
        console.log('rawImage', rawImage )
        axios.post(`${process.env.REACT_APP_DATABASE_URL}/profile.json` , {image:rawImage})
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
