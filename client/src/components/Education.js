import React, { Fragment } from 'react'

export default function Education({educationContent}) {
    return (
        <div>
            {educationContent.map((item)=>{
                return (
                    <Fragment>
                        <h1>{item.scholl_name}</h1>
                        <h2>{item.degree}</h2>
                        <h3>{item.major}</h3>
                        <h4>{item.year_passed}</h4>
                    </Fragment>
                )
            })}
        </div>
    )
}
