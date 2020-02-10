import React, { useState } from 'react'
import '../style/ProfileContent.css';
import ProfileDrawer from './ProfileDrawer';
import ProfileView from './ProfileView';

export default function ProfileContent(props) {
    const labels = ['About Me', 'Experience' , 'Skills', 'Projects', 'Education']

    const [value, setValue] = useState('')
    const handleClick = (label) => {
        console.log('in content ' , label)
        setValue(label)
    }
    return (
        <div className="profile-content-wrapper">
            <div className="profile-content-container">
                <div className="profile-drawer">
                    <ProfileDrawer handleClick={handleClick} labels={labels}/>
                </div>
                <div className="profile-view">
                    <ProfileView text={value}/>
                </div>
            </div>
        </div>
    )
}
