import React, { useEffect } from 'react'
import { fetchData, options } from '../utils/fetchData'
import BoxExercise from './BoxExercise'

const Exercises = ({ exercises, setExercises, part }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (part === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          options
        )
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`,
          options
        )
      }

      setExercises(exercisesData)
    }

    fetchExercisesData()
  }, [part, setExercises])

  return (
    <>
      <h1 className="exerciseH" name="exercises">
        Exercises
      </h1>
      <div className="exerciseSection">
        {exercises.map((item) => (
          <BoxExercise key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Exercises
