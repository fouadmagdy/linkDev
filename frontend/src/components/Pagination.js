import React, { useState } from 'react'

import './Pagination.scss'

const Pagination = ({ sendPageNumberToListing }) => {

    const [pageNumberActive, setPageNumberActive] = useState(1)

    const handlePageChange = (e, page) => {
        e.preventDefault()
        setPageNumberActive(page)
        sendPageNumberToListing(page)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-custom justify-content-center">
                <li className="page-item"><a className={`page-link`} onClick={(e) => handlePageChange(e, 1)} >{`<`}</a></li>
                <li className="page-item"><a className={`page-link ${pageNumberActive === 1 ? 'active' : ''}`} onClick={(e) => handlePageChange(e, 1)}>1</a></li>
                <li className="page-item"><a className={`page-link ${pageNumberActive === 2 ? 'active' : ''}`} onClick={(e) => handlePageChange(e, 2)}>2</a></li>
                <li className="page-item"><a className={`page-link`} onClick={(e) => handlePageChange(e, 2)} >{`>`}</a></li>
            </ul>
        </nav>
    )
}

export default Pagination
