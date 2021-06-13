import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './RelatedTopic.scss'

import { CgArrowLongRight } from "react-icons/cg";

import rel1 from '../images/rel1.png'
import rel2 from '../images/rel2.png'
import rel3 from '../images/rel3.png'

const RelatedTopic = () => {
    return (
        <>
            <h2 className="mt-5 mb-4">Related Topics</h2>
            <Row className="relatedTopics">
                <Col sm={12} lg={4}>
                    <div className="card" style={{ backgroundImage: `url(${rel1})` }}>
                        <div className="card-body">
                            <div className="relatedTopics-item mt-auto p-3">
                                <p>Category</p>
                                <h3>New Artificial Intelligence Apps</h3>
                                <p className="view-details">
                                    view Details <CgArrowLongRight />
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div className="card" style={{ backgroundImage: `url(${rel2})` }}>
                        <div className="card-body">
                            <div className="relatedTopics-item mt-auto p-3">
                                <p>Category</p>
                                <h3>Technology Developments Seminar</h3>
                                <p className="view-details">
                                    view Details <CgArrowLongRight />
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div className="card" style={{ backgroundImage: `url(${rel3})` }}>
                        <div className="card-body">
                            <div className="relatedTopics-item mt-auto p-3">
                                <p>Category</p>
                                <h3>Next Step Of IOT [Internet Of Things]</h3>
                                <p className="view-details">
                                    view Details <CgArrowLongRight />
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="my-4" style={{ textAlign: 'right' }}>
                    <Link to="/" className="latest-news-viewBtn">View All <CgArrowLongRight /></Link>
                </Col>
            </Row>
        </>
    )
}

export default RelatedTopic
