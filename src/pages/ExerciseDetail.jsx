import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import image from '../assets/benchpress.gif'
import Footer from '../components/Footer'
import { fetchData, options } from '../utils/fetchData'
import dumbbell from '../assets/dumbbell.png'
import muscle from '../assets/muscle.png'
import weightlifting from '../assets/weightlifting.png'

const ExerciseDetail = () => {
  const params = useParams()
  const [exercise, setExercise] = useState({})
  const { bodyPart, equipment, gifUrl, name, target } = exercise

  const exerciseId = params.id
  const iconDetail = [
    {
      icon: weightlifting,
      name: bodyPart,
    },
    {
      icon: muscle,
      name: target,
    },
    {
      icon: dumbbell,
      name: equipment,
    },
  ]

  useEffect(() => {
    const fetchExercise = async () => {
      const result = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`,
        options
      )
      setExercise(result)
    }
    fetchExercise()
  }, [exerciseId])
  return (
    <>
      <div className="exerciseDetail">
        <div className="imageBox">
          <img src={gifUrl} alt="img" />
        </div>
        <div className="exerciseText">
          <h1>{name}</h1>
          {iconDetail.map((item) => (
            <div className="iconText" key={item.icon}>
              <img src={item.icon} alt="item" width={100} height={100} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ExerciseDetail
