import React, { useState , useEffect } from 'react'
import '../style/ProfileDetails.css';
import axios from 'axios';

export default function ProfileDetails() {
    // const [recentImage, setRecentImage] = useState('')  
    // const setImage = (data) => {
    //     console.log(data['-LxV6Y9-Um5A-ji4UK_y'].image)
    //     axios({
    //         method: 'get',
    //         url: data['-LxV6Y9-Um5A-ji4UK_y'].image,
    //         responseType: 'blob'
    //     }).then((response)=>{
    //         console.log('rep',response)
    //         let reader = new FileReader();
    //         reader.readAsDataURL(response.data); 
    //         reader.onloadend = function() {
    //             let base64data = reader.result;
    //         }
    //     })
    //     // setRecentImage(data['-LxV6Y9-Um5A-ji4UK_y'].image)
    // }
    return (
        <div className="profile-detail-container">
            <div className="profile-detail">
                <div className="name">
                    Jaskaranpreet Singh
                </div>
                <div className="email">
                    <h1>jaskaransingh123@gmail.com</h1>
                </div>
                <div className="phone">
                    <h1>669-261-8960</h1>
                </div> 
            </div>
        </div>
    )
}
