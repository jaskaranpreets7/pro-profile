import React, { Fragment } from 'react'
import '../style/experience.scss'

export default function Experience({experienceContent}) {
    return (
        <Fragment>
            {experienceContent.map((item , index )=>{
                return (
                    <Fragment key={index}>
                        <div className="experience-fields">
                            <div className="left-fields">
                                <div className="company">{item.company}</div>
                                &nbsp; {"-"} &nbsp;
                                <div className="title">{item.title}</div>
                            </div>
                            <div className="right-fields"> 
                                <div className="start-date">{item.start_date}</div>
                                &nbsp; {"-"} &nbsp;
                                <div className="end-date">{item.end_date}</div>
                            </div>
                        </div>
                        <div className="description">Description : </div>
                        {item.description.map((item , index)=>{
                            return (
                                <ul key={index}>
                                    <li>{item}</li>
                                </ul>
                            )
                        })}

                    </Fragment>
                )
            })}
        </Fragment>
    )
}
