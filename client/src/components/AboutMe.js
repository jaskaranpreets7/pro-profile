import React from 'react'
import './../style/about.scss'

export default function AboutMe({AboutMeText}) {
    return (
        <div className="about-me-wrapper">
            <em className="about-me-text">{AboutMeText}</em>
        </div>
    )
}
