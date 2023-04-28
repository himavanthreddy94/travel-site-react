import React from 'react'
import './Slider.css'
import { useInView } from 'react-intersection-observer';

const Slider = ({imageScr, title, subtitle, flipped}) => {

    const { ref, inView } = useInView({
    threshold: 0.4,
    });

    const renderContent = () => {
        if (!flipped){
            return <>
                <img src={imageScr} alt="travel-02-image" className='slider-img' />
                <div className="slider-content">
                    <h1 className="slider-title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </>
        } else {
            return <>
                <div className="slider-content">
                    <h1 className="slider-title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <img src={imageScr} alt="travel-02-image" className='slider-img' />               
            </>
        }
    }

  return (
    <>
        <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    </>
  )
}

export default Slider
