import React from 'react'
import '../style/profileDrawer.scss'
import '../style/button.scss'

export default function ProfileDrawer(props) {
    const handleClick = (label) => {
        props.handleClick(label)
    }
    const renderLabels = props.labels.map( (label , index ) => {
        return (
            <button 
                type="button" 
                className="btn btn-primary btn-lg btn-block" 
                key={index} onClick={()=> handleClick(label)} 
                onFocusCapture={()=> handleClick(label)}
                autoFocus={label === "About Me" ? true : false}
                >
                    {label}
            </button> 
        )
    })

    return (
        <div className="profile-drawer-wrapper">
            {renderLabels}
        </div>
    )
}
