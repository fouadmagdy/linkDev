import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'react-bootstrap'
import './Cards.scss'
import Moment from 'react-moment';

import { AiOutlineHeart } from "react-icons/ai";
import { FaShareAlt } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

const Cards = ({ title, description, url, publishedAt, categoryName, id, content, pageDetails }) => {

    return (

        <Card>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Text className="my-2">
                    {pageDetails && categoryName?.name}
                </Card.Text>

                <div className="d-flex justify-content-between">
                    <Link to={`/listing-details/${id}`}>
                        <Card.Title className="m-0">{title}</Card.Title>
                    </Link>
                    <div className="card-shareLike">
                        <AiOutlineHeart />
                        <FaShareAlt />
                    </div>
                </div>
                {!pageDetails && (
                    <span className="tag">
                        {categoryName?.name || 'No Category'}
                    </span>
                )}

                <Card.Text className="mt-3">
                    {pageDetails ? content : description || 'No Description'}
                </Card.Text>
                <div className="date">
                    <FiCalendar />
                    <Moment format="ddd MMM D YYYY">{publishedAt}</Moment>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Cards
