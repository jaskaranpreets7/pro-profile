import React, { Fragment } from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'


export default function ProfileView({label , userProfileContent}) {

    const renderContent = () => {
        if(label.toLowerCase() === 'about me'){
            return <AboutMe AboutMeText={userProfileContent['about_me']}/>
        }
        if(label.toLowerCase() === 'experience'){
            return <Experience experienceContent={userProfileContent[label.toLowerCase()]}/>
        }
        if(label.toLowerCase() === 'projects'){
            return <Projects projectContent={userProfileContent[label.toLowerCase()]}/>
        }
        if(label.toLowerCase() === 'skills'){
            return <Skills skillContent={userProfileContent[label.toLowerCase()]}/>
        }
        if(label.toLowerCase() === 'education'){
            return <Education educationContent={userProfileContent[label.toLowerCase()]}/>
        }
    }

    return (
        <Fragment>
            {renderContent()}
        </Fragment>
    )
}
