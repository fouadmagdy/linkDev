import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'

import Cards from '../components/Cards'
import RelatedTopic from '../components/RelatedTopic'
import BreadCrumb from '../components/BreadCrumb'

import './NewsDetails.scss'

const NewsDetails = ({ match }) => {
    const newId = match.params.id
    const [data, setData] = useState([])
    const [news, setNews] = useState([])
    console.log('news', news)

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/newsapi')
            setData(data)
            const productDetails = data.articles.filter(article => article.id === +newId)
            setNews(productDetails)
        }
        fetchData()
    }, [newId])

    return (
        <div className="Page-NewsDetails">
            <Container style={{ paddingTop: "7rem" }}>
                <BreadCrumb pageTitle="News Details" />
                <Row>
                    {news.length > 0 && Object.keys(data).length > 0 && (
                        <Cards
                            id={news[0].id}
                            title={news[0].title}
                            description={news[0].description}
                            content={news[0].content}
                            url={news[0].urlToImage}
                            publishedAt={news[0].publishedAt}
                            categoryName={data.sourceCategory[news[0].sourceID]}
                            pageDetails
                        />
                    )}
                </Row>

                <RelatedTopic />
            </Container>
        </div>
    )
}

export default NewsDetails
