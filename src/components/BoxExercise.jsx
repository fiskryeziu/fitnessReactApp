import React from 'react'

const BoxExercise = ({ item }) => {
  return (
    <div className="boxExercise">
      <img src={item.gifUrl} alt="exercises_example" />
      <div className="btnParts">
        <button>{item.target}</button>
      </div>
      <p>{item.name}</p>
    </div>
  )
}

export default BoxExercise
