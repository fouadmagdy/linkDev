import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listNews } from '../actions/newsActions'

import Cards from '../components/Cards'
import Loader from '../components/Loader'
import './LatestNews.scss'

import { CgArrowLongRight } from "react-icons/cg";


const LatestNews = () => {
    const dispatch = useDispatch()
    const newsList = useSelector((state) => state.newsList)
    const { loading, news } = newsList

    useEffect(() => {
        dispatch(listNews())
    }, [dispatch])


    return (
        <Container className="mt-3 mb-5 latest-news">
            <div className="d-flex justify-content-between align-items-center  latest-news-header mb-4">
                <h2>Latest News</h2>
                <Link to="/listing" className="latest-news-viewBtn">View All <CgArrowLongRight /></Link>
            </div>

            <Row>
                {Object.keys(news).length > 0 && !loading ? news.articles.filter((article => article.showOnHomepage === true)).map((filteredArticle, index) => (
                    <Col sm={12} lg={4} className="mb-4" key={index}>
                        <Cards
                            id={filteredArticle.id}
                            title={filteredArticle.title}
                            description={filteredArticle.description}
                            url={filteredArticle.urlToImage}
                            publishedAt={filteredArticle.publishedAt}
                            categoryName={news.sourceCategory[filteredArticle.sourceID]}
                        />
                    </Col>
                )) : loading ? <Loader /> : null}
            </Row>
        </Container >
    )
}

export default LatestNews

