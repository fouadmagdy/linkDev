import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BreadCrumb from '../components/BreadCrumb'
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'

const Listing = () => {

    const [articles, setarticles] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    console.log('pageNumber', pageNumber)

    const [doneSearched, setDoneSearched] = useState(false)
    const [searchedNews, setSearchedNews] = React.useState([{}]);
    const [categorySelected, setCategorySelected] = React.useState('')
    const newsList = useSelector((state) => state.newsList)
    const { loading, news } = newsList


    useEffect(() => {

        const paginate = (array, page_size, page_number) => {
            return array.slice((page_number - 1) * page_size, (page_number) * page_size)
        }

        if (news.status === "ok") {
            setarticles(paginate(news.articles, 12, pageNumber))
        }
    }, [pageNumber])




    const sendDataToParent = (index) => {
        setSearchedNews(index);
        if (index) {
            setDoneSearched(true)
        } else {
            setDoneSearched(false)
        }
    };

    const sendCategoryToListing = (index) => {
        setCategorySelected(index);
    };

    const sendPageNumberToListing = (index) => {
        setPageNumber(index);
    };


    return (
        <Container className="page-news-details" style={{ marginTop: '7rem' }}>
            <BreadCrumb pageTitle="News" />
            <SearchBar news={news} sendDataToParent={sendDataToParent} sendCategoryToListing={sendCategoryToListing} />

            <Row className="mt-5">
                {Object.keys(news).length > 0 && !doneSearched && !categorySelected ? articles.map((article, index) => (
                    <Col sm={12} lg={4} className="mb-4" key={index}>
                        <Cards
                            id={article.id}
                            title={article.title}
                            description={article.description}
                            url={article.urlToImage}
                            publishedAt={article.publishedAt}
                            categoryName={news.sourceCategory[article.sourceID]}
                        />
                    </Col>
                )) : doneSearched && !categorySelected ? (
                    searchedNews.articles.map((article, index) => (
                        <Col sm={12} lg={4} className="mb-4" key={index}>
                            <Cards
                                id={article.id}
                                title={article.title}
                                description={article.description}
                                url={article.urlToImage}
                                publishedAt={article.publishedAt}
                                categoryName={news.sourceCategory[article.sourceID]}
                            />
                        </Col>
                    ))
                ) : categorySelected ? news.articles.filter(news => news.sourceID === +categorySelected).map((article, index) => (
                    <Col sm={12} lg={4} className="mb-4" key={index}>
                        <Cards
                            id={article.id}
                            title={article.title}
                            description={article.description}
                            url={article.urlToImage}
                            publishedAt={article.publishedAt}
                            categoryName={news.sourceCategory[article.sourceID]}
                        />
                    </Col>
                )) : <Loader />}
            </Row>

            <Pagination sendPageNumberToListing={sendPageNumberToListing} />
        </Container>
    )
}

export default Listing
