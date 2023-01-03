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

  /**
   *  Prevent errors by clicking the prev button to before the first element
   *  Prevent errors by clicking the next button to after the last element
   */
  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0
    }

    if (number < 0) {
      return people.length - 1
    }

    return number
  }

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prePerson = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  // based on the Math.random() function
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    console.log(randomNumber)
    setIndex(checkNumber(randomNumber))
  }

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
        <button className="prev-btn" onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise Me!
      </button>
    </article>
  )
}

export default Review
