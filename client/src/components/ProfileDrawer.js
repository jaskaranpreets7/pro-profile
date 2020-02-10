import React from 'react'

export default function ProfileDrawer(props) {
    const handleClick = (label) => {
        props.handleClick(label)
    }
    const renderLabels = props.labels.map( (label , index )=><button type="button" className="btn btn-primary btn-lg btn-block" key={index} onClick={()=> handleClick(label)}>{label}</button> )

    return (
        <div>
            {renderLabels}
        </div>
    )
}
