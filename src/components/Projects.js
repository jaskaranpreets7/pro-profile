import React, { Fragment } from 'react'
import '../style/projects.scss'

export default function Projects({projectContent}) {

    return (
        <Fragment>
            {projectContent.map((item , index)=>{
                return(
                    <div className="project-wrapper" key={index}>
                        <div className="project-title" >
                            <div className="project-title-text">{item.name}</div>
                        </div>
                        <div className="project-description">Project description : </div>
                            {item.description.map((item , index)=>{
                                return (
                                    <ul key={index}>
                                        <li>{item}</li>
                                    </ul>
                                )
                            })}
                    </div> 
                ) 
            })}
        </Fragment>
    )
}
