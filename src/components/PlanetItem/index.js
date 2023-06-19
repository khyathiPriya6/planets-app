import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {name, imageUrl, description} = eachPlanetDetails
  const altValue = `planet ${name}`
  return (
    <div className="each-planet-container">
      <h1 className="planets-heading">PLANETS</h1>
      <div className="each-planet-img-container">
        <img className="planet-img" alt={altValue} src={imageUrl} />
        <h1 className="planet-name">{name}</h1>
        <p className="planet-desc">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
