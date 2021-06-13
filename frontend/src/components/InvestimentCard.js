import React from 'react'

import plus from '../images/plus.png'
import '../screens/Investments.scss'

const InvestimentCard = ({ image, title, visHidden }) => {
    return (
        <div className={`investments-rectangles ${visHidden && 'visibility-hidden'}`}>
            <div className="transform-invest-card-positive">
                <img src={image} alt="inv1" />
                <p>{title}</p>
                <img src={plus} alt="plus" />
            </div>
        </div>
    )
}

export default InvestimentCard
