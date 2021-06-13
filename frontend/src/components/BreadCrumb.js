import React from 'react'
import './BreadCrumb.scss'


const BreadCrumb = ({ pageTitle }) => {
    return (
        <div className="News Details">
            <ul className="list-inline">
                <li className="list-inline-item">Home </li>
                <li className="list-inline-item active"> {`>`} </li>
                <li className="list-inline-item active"> News</li>
            </ul>
            <h1 className="breadcrumbDetails-header">{pageTitle}</h1>
        </div>
    )
}

export default BreadCrumb
