import React, { useEffect, useState } from 'react'
import { fetchData, options } from '../utils/fetchData'
import ScrollBox from './ScrollBox'

const SearchExercise = ({ setExercises, setPart, part }) => {
  const [input, setInput] = useState('')
  const [parts, setParts] = useState([])

  useEffect(() => {
    const fetchedData = async () => {
      const result = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        options
      )
      setParts(['all', ...result])
    }
    fetchedData()
  }, [setPart])

  const searchHandler = async () => {
    if (input) {
      const result = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        options
      )
      const filteredResults = result.filter((item) => {
        return (
          item.name.toLowerCase().includes(input) ||
          item.equipment.toLowerCase().includes(input) ||
          item.bodyPart.toLowerCase().includes(input) ||
          item.target.toLowerCase().includes(input)
        )
      })
      setExercises(filteredResults)
    }
  }
  return (
    <div className="searchExercises">
      <h1 style={{ textAlign: 'center' }}>Search Exercises</h1>
      <div className="searchBox">
        <input
          type="text"
          value={input}
          placeholder="Search exercises"
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <div className="searchExerciseBox">
        <ScrollBox data={parts} />
      </div>
    </div>
  )
}

export default SearchExercise
