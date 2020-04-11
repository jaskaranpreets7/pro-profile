import React from 'react'
import '../style/profileDetails.scss';

export default function ProfileDetails({userProfileData}) {
    return (
        <div className="profile-detail-container">
            <div className="profile-detail">
                <div className="name">
                    {userProfileData.first_name + ' ' + userProfileData.last_name}
                </div>
                <div className="email">
                    <div>{userProfileData.email}</div>
                </div>
                <div className="phone">
                    <div>{userProfileData.phone}</div>
                </div> 
            </div>
        </div>
    )
}
