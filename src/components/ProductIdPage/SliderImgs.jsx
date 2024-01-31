import { useState } from 'react'
import './styles/SliderImgs.css'

const SliderImgs = ({product}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const objStyle = {
        transform: `translateX(calc(-${currentIndex}/3 *100%)`
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
        else {
            setCurrentIndex(2)
        }
    }

    const handleNext = () => {
        if(currentIndex < 2) {
            setCurrentIndex(currentIndex + 1)
        }else{
            setCurrentIndex(0)
        }
    }

  return (
    <div className="slider">
        <button onClick={handlePrev} className='slider__btn slider__prev'>
            <i className='bx bxs-chevron-left'></i>
            </button>
        <div className="slide__movable" style={objStyle}>
            {
                product?.images.map(infoImg => (
                    <div className="slider__img__container">
                        <img className="slider__img" src={infoImg.url} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={handleNext} className='slider__btn slider__next'>
            <i className='bx bxs-chevron-right' ></i>
        </button>
    </div>
  )
}

export default SliderImgs