import React from 'react'
import {ArrowRightCircle} from "react-bootstrap-icons";

const news = (props) => {
  const date = new Date(props.news_published_date);
const published_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
  return (
    // <div className='mycard'>Mycard No. {props.news_title}</div>
    <div className='news'>
      <div className='news_img'>
        <img src={props.news_image} alt="news image"></img>
      </div>
      <div className='news-title'>
        <p>{props.news_title}</p>
      </div>
      <div className='news-published-date'>
        <p>{published_date}</p>
      </div>
      <div className='news-read-more'>
      <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
<<<<<<< HEAD
  <a class="button-text" href={props.news_url}>Read More</a>
=======
  <a  href={props.news_url} class="button-text" style={{target:"_blank"}}>Read More</a>
>>>>>>> 4f6b15013b9ae8dbe326c6f4b20581b9a50442aa
</button>
      </div>
    </div>
  )
}

export default news