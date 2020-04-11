import React from 'react'
import '../style/skills.scss'
export default function Skills({skillContent}) {
    return (
        <div className="skills-wrapper">
            {skillContent.map((item)=>{
                return (
                    <div className="bubble" key={item.name}>
                        <div className="text">
                            {item.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
