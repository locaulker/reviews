import React, { useState } from "react"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
  const [index, setIndex] = useState(0) // index here means array index

  /**
   *  destructuring from a specific array element: people[index]
   *  Note that array is zero based. Therefore, initial value is set to "0"
   *  setIndex() points to current index
   */
  const { name, job, image, text } = people[index] //

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">surprise Me!</button>
    </article>
  )
}

export default Review
