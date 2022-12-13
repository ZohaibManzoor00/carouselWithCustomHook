import { useState } from "react"

function useCarousel(arrOfItems) {
    const [index, setIndex] = useState(Math.floor(Math.random() * arrOfItems.length))
    const curItem = arrOfItems[index]
  
    const moveCarousel = (e, direction) => {
      e.preventDefault()
      if (direction === 'next') {
        if (index === arrOfItems.length - 1) {
          setIndex(0)
        } else {
          setIndex(index + 1)
        }
      } else if (direction === 'prev') {
        if (index === 0) {
          setIndex(arrOfItems.length - 1)
        } else {
          setIndex(index - 1)
        }
      } else {
        setIndex(Math.floor(Math.random() * arrOfItems.length))
      }
    }

    return {
        curItem, 
        moveCarousel
    }
} 

export default useCarousel