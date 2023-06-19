import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachPlanetDetails => (
          <PlanetItem eachPlanetDetails={eachPlanetDetails} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
