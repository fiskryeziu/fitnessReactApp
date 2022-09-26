import React from 'react'
import { IoIosFitness } from 'react-icons/io'

const BoxExercise = ({ data }) => {
  return (
    <>
      <div className="box">
        <IoIosFitness className="iconExercise" />
        <p>{data}</p>
      </div>
    </>
  )
}

export default BoxExercise
