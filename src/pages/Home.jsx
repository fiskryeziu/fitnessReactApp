import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import SearchExercise from '../components/SearchExercise'
import fetchData from '../utils/fetchData'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [part, setPart] = useState('all')
  return (
    <>
      <HeroSection />
      <SearchExercise
        setExercises={setExercises}
        part={part}
        setPart={setPart}
      />
      <Exercises
        exercises={exercises}
        part={part}
        setExercises={setExercises}
      />
      <Footer />
    </>
  )
}

export default Home
