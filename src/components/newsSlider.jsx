import {React, useEffect, useState} from 'react'
import News from './news'
import Axios from 'axios';


const NewsSlider = () => {
    let box = document.querySelector('.product-container');
    const [newsInfm, setNewsInfm]=useState([]);
    const btnpressprev = () => {
        let width=box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnpressnext = () => {
        
        let width=box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }
    useEffect(()=>{
        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7ddfedfedba34c428252ed29cc68f2da")
        .then((res)=>{
            console.log(res.data.articles);
            setNewsInfm(res.data.articles);
        })
    })
    return (
        <>
        <div className='news-heading'>
            <h1>Stay Infromed on the Latest Industry News</h1>
        </div>
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            
            <div className="product-container">
                {newsInfm.map((news)=>{
                     return(<News news_title={news.title} news_image={news.urlToImage} news_published_date={news.publishedAt} news_content={news.description} news_author={news.author} news_url={news.url}/>)  
                }             
            )}
            </div>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


        </div>
        </>
    )
}

export default NewsSlider;