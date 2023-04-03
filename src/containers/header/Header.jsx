import React from 'react'
import './header.scss'
import People from '../../assets/people.png'
import Ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div id='home' className='gpt3__header section_padding'>
    <div className="gpt3__header-content">

      <h1 className='gradient-text'>
      Let’s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
 
Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.

      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder='Your Email Address'/>
        <button type='button'>Get Started</button>
      </div>
      <div className="gpt3__header__content-people">
        <img src={People} alt="" />
        <p>1600 people requested access a visit in last 12 hours</p>
      </div>
     
    </div>
    <div className="gpt3__headre-img">
        <img src={Ai} alt="" />
      </div>

     
    </div>
  )
}

export default Header
