import React from 'react'
import ReactDom from 'react-dom'

const AddDetailForm = props => {
    return  ReactDom.createPortal(
        <form className="add-detail-container">
            <div>
                <label>First Name:</label>
                <input/>
            </div>
            <div>
                <label>Last Name:</label>
                <input/>
            </div>
            <div>
                <label>Contact:</label>
                <input/>
            </div>
            <div>
                <label>Email:</label>
                <input/>
            </div>
            <div>
                <label>Role:</label>
                <input/>
            </div>
        </form>,
        document.querySelector('#modal')
        ) 

}
export default AddDetailForm
