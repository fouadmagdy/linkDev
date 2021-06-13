import React from 'react'
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import Fuse from 'fuse.js'

import searchIcon from '../images/search.png'
import sortImg from '../images/sort.png'
import { FiCalendar } from 'react-icons/fi';

import './SearchBar.scss'

const SearchBar = ({ news, sendDataToParent, sendCategoryToListing }) => {

    const options = {
        keys: [
            "title",
        ]
    };


    const handleSearch = (e) => {
        const fuse = new Fuse(Object.keys(news).length > 0 && news.articles.map((article) => article.title), options);

        // Change the pattern
        const pattern = e.target.value

        let articles = fuse.search(pattern).map(searchedNewsItems => {
            return Object.keys(news).length > 0 && news.articles[searchedNewsItems.refIndex]
        })
        let filteredNewsToObject = { articles }
        sendDataToParent(filteredNewsToObject)

    }

    const handleCategoryChange = (e) => {
        sendCategoryToListing(e.target.value)
    }


    return (
        <Container className="search-bar">
            <Row>
                <Col sm={12} lg={2} className="pl-lg-0">
                    <Form.Group className="caledar">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="text" placeholder="Select" />
                        <FiCalendar />
                    </Form.Group>
                </Col>
                <Col sm={12} lg={2} className="caledar">
                    <Form.Group>
                        <Form.Label>To</Form.Label>
                        <Form.Control type="text" placeholder="Select" />
                        <FiCalendar />
                    </Form.Group>
                </Col>
                <Col sm={12} lg={2}>
                    <Form.Group as={Col}>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" defaultValue="Select" onChange={handleCategoryChange}>
                            <option>Select...</option>
                            {Object.keys(news).length > 0 && news.sourceCategory.map(((category, index) => (
                                <option key={category.id} value={index}>{category.name}</option>
                            )))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                    <div className="input-group" style={{ marginTop: '2rem' }}>
                        <input type="text" className="form-control" placeholder="search services" onChange={handleSearch} />
                        <div className="input-group-prepend">
                            <button className="input-group-text green-bg-clr"><Image src={searchIcon} alt="Search" /></button>
                        </div>
                    </div>

                </Col>
                <Col sm={12} lg={2} style={{ paddingTop: '2.5rem' }}>
                    <span className="green-text-clr" style={{ paddingRight: '1rem' }}>Sort by</span>
                    <img src={sortImg} alt="sort" />
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar
