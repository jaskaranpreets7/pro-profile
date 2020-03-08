import React, { useState } from 'react'
import '../style/ProfileContent.css';
import ProfileDrawer from './ProfileDrawer';
import ProfileView from './ProfileView';

export default function ProfileContent({userProfileContent}) {
    const labels = ['About Me', 'Experience' , 'Skills', 'Projects', 'Education']

    const [label, setLabel] = useState('')
    const handleClick = (lbl) => {
        setLabel(lbl)
    }
    return (
        <div className="profile-content-wrapper">
            <div className="profile-content-container">
                <div className="profile-drawer">
                    <ProfileDrawer handleClick={handleClick} labels={labels}/>
                </div>
                <div className="profile-view">
                    <ProfileView label={label} userProfileContent={userProfileContent}/>
                </div>
            </div>
        </div>
    )
}
