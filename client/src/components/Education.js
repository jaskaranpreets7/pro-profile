import React, { Fragment } from 'react'
import '../style/education.scss'

export default function Education({educationContent}) {
    return (
        <Fragment>
            {educationContent.map((item ,index)=>{
                return (
                    <div style={{borderBottom: '2px solid black'}} key={index}>
                        <div className="education-fields">
                            <div className="field-labels" >SCHOOL NAME : </div>
                            <div className="field-text">{item.scholl_name}</div>
                        </div>
                        <div className="education-fields">
                            <div className="field-labels" >DEGREE : </div>
                            <div className="field-text">{item.degree}</div>
                        </div>
                        <div className="education-fields">
                            <div className="field-labels" >MAJOR: </div>
                            <div className="field-text">{item.major}</div>
                        </div>
                        <div className="education-fields">
                            <div className="field-labels" >YEAR PASSED : </div>
                            <div className="field-text">{item.year_passed}</div>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}
