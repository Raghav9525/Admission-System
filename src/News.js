import React from 'react'
import './style.css';

function News() {
  return (
    <div>
        <div className="header">
        <div className="container">
          <b> NEWS : </b>
          <marquee>
            My school: "At <span className="thought">PIONEER ACADEMY</span>, we believe in nurturing not only the minds but also the hearts of
            our students. Our values of respect, kindness, and inclusivity are the foundation of our school
            community. We strive to empower every student to reach their full potential, not just academically, but
            as compassionate and responsible individuals who will make a positive impact on the world. Together, we
            learn, grow, and create a brighter future."
          </marquee>
        </div>
      </div>
    </div>
  )
}

export default News