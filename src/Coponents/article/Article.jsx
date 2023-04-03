import React from 'react'
import './article.scss'

const Article = ({img,date,text}) => {
  return (
    <div className='gpt3__blog-container_article'>
   <div className="gpt3__blog-container_article-img">
     <img src={img} alt="" />
   </div>

   <div className="gpt3__blog-container_article-contentnt">
      <p>
        {date}
      </p>

      <h3>{text} </h3>

   <p>Read Full Article</p>
   </div>
    </div>
  )
}

export default Article
