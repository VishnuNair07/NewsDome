import React, {useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [articles , setArticles] = useState([]);
  const [page , setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);
 
const Updates = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9cc0dacc00664008883bd82426bf6118&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    
  }

  useEffect(() => {
    Updates();
  }, []);

  const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9cc0dacc00664008883bd82426bf6118&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

  }


    return (
      <div>
         <h1 className="text-center" style={{margin : "90px 0px -20px 0"}}><i>NewsDome - Headlines</i></h1>
    
          <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
          <div className="container">
    <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} source={element.source.name} />
              </div>
            })}
            </div>
      </div>
            </InfiniteScroll>
          </div>
    )
  }


News.defaultProps = {
  category: 'sports'
}

News.propTypes = {
  category: PropTypes.string
}


export default News
