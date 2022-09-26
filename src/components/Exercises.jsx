import React, { useEffect, useState } from 'react'
import { fetchData, options } from '../utils/fetchData'
import BoxExercise from './BoxExercise'
import { scroller } from 'react-scroll'
import ReactPaginate from 'react-paginate'

const Exercises = ({ exercises, setExercises, part }) => {
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(6)
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

  const currentExercises = exercises.slice(offset, offset + perPage)
  const pageCount = Math.ceil(exercises.length / perPage)

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage + 1)
    scroller.scrollTo('exercises', {
      duration: 800,
      smooth: 'easeInOutQuart',
    })
  }
  return (
    <>
      <h1 className="exerciseH" name="exercises" id="exercises">
        Exercises
      </h1>
      <div className="exerciseSection">
        {currentExercises.map((item) => (
          <BoxExercise key={item.id} item={item} />
        ))}
      </div>
      <div className="paginateDiv">
        {exercises.length > 9 && (
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        )}
      </div>
    </>
  )
}

export default Exercises
