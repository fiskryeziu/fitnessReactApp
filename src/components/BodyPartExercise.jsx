import React from 'react'
import { IoIosFitness } from 'react-icons/io'
import { scroller } from 'react-scroll'

const BoxExercise = ({ data, setPart }) => {
  return (
    <>
      <div
        className="box"
        onClick={() => {
          setPart(data)
          scroller.scrollTo('exercises', {
            duration: 800,
            smooth: 'easeInOutQuart',
          })
        }}
      >
        <IoIosFitness className="iconExercise" />
        <p>{data}</p>
      </div>
    </>
  )
}

export default BoxExercise
