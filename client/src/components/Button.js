import React from 'react'

export default function Button(props) {
    return ( <i style={{fontSize: '50px' , padding: '15px 0px 0px 0px'}} className={props.className} onClick={()=>props.handleClick()}></i> )
}
