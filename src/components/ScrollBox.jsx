import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import BodyPartExercise from './BodyPartExercise'

const ScrollBox = ({ data, setPart }) => {
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
      <IoMdArrowForward
        size={30}
        onClick={() => scrollNext()}
        className="arrowLogoRight"
      />
    )
  }
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
      <IoMdArrowBack
        size={30}
        onClick={() => scrollPrev()}
        className="arrowLogoLeft"
      />
    )
  }

  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
      {data.map((item) => (
        <BodyPartExercise
          data={item}
          key={item.id || item}
          itemId={item.id}
          setPart={setPart}
        />
      ))}
    </ScrollMenu>
  )
}

export default ScrollBox
