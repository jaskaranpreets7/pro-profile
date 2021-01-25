import React from 'react'
import '../style/button.scss'

export default function Button(props) {
    return ( <i className={props.className} onClick={()=>props.handleClick()}></i> )
}
