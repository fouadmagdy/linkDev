import React from 'react'
import './BreadCrumb.scss'


const BreadCrumb = ({ pageTitle, titleOne, titleTwo }) => {
    return (
        <div className="News Details">
            <ul className="list-inline">
                <li className="list-inline-item">Home </li>
                <li className="list-inline-item active"> {`>`} </li>
                <li className="list-inline-item active"> {titleOne}</li>
                {titleTwo && (
                    <span className="text-black-50">
                        <li className="list-inline-item active"> {`>`} </li>
                        <li className="list-inline-item active"> {titleTwo}</li>
                    </span>
                )}
            </ul>
            <h1 className="breadcrumbDetails-header">{pageTitle}</h1>
        </div>
    )
}

export default BreadCrumb
