import React from 'react'
import '../style/Skills.css'
export default function Skills({skillContent}) {
    console.log(skillContent)
    return (
        <div className="skills-wrapper">
            {skillContent.map((item)=>{
                return (
                    <div className="bubble">
                        <div className="text">
                            {item.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
