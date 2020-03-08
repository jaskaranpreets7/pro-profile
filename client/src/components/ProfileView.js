import React, { useState, useEffect } from 'react'

export default function ProfileView({label , userProfileContent}) {
    const [data , setData] = useState('')
    const storeData = () => {
        if(label.toLowerCase() in userProfileContent){
            setData(userProfileContent[label.toLowerCase()])
        }
    }
    useEffect(()=>{
        storeData()
    })

    return (
        <div>
            {(data.length && data.length > 0 )?
            data.map((item)=> {
                return (
                    <li>
                        <ul>
                            {item.company}
                        </ul>
                    </li>
                )
            })
            :
            null
            }
        </div>
    )
}
