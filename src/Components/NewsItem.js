import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, publishedAt, source } = props;
    return (
     
      <div className='my-5'>
        <div className="card" style={{ height: "67vh" }}>
          <img src={!imageUrl ? "https://images.wsj.net/im-683332/social" : imageUrl} className="card-img-top" alt="..." style={{ height: "35vh" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{new Date(publishedAt).toGMTString()}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark" >Read more..</a>
          </div>
          <span style={{ left: '90%', zIndex: 1 }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        </div>
    )
  }


export default NewsItem
