import React from 'react'
import { Link } from 'react-router-dom'

const BoxExercise = ({ item }) => {
  return (
    <Link to={`/exercise/${item.id}`}>
      <div className="boxExercise">
        <img src={item.gifUrl} alt="exercises_example" />
        <div className="btnParts">
          <button>{item.target}</button>
          <button>{item.bodyPart}</button>
        </div>
        <p>{item.name}</p>
      </div>
    </Link>
  )
}

export default BoxExercise
