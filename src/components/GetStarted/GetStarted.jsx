import React from 'react'
import "./GetStarted.css"
const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Homeyz</span>
                <span className='secondaryText'>Subscribe And find best price fit for your budget
                    <br />
                    Find Your Home Soon
                </span>
                <button className="button">
                    <a href="mailto:omsemailbox@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
