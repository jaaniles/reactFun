import React, { Component } from 'react';

class TemperatePlanets extends Component {
  state = {
    temperatePlanets: []
  }
  componentWillMount() {
    const URL = "http://swapi.co/api/planets/"
    fetch(URL).then(response => response.json())
    .then(data => {
      const temperatePlanets = data.results.filter(planet => planet.climate.includes("temperate"))
      this.setState({temperatePlanets: temperatePlanets})
    })
  }
  render() {
    const temperatePlanets = this.state.temperatePlanets.map(planet => {
      return (
        <p key={planet.name}>{planet.name}</p>
      )
    })
    return (
      <div className="panel temperateBox">
      <h4>Temperate planets in Star Wars universe</h4>
      { temperatePlanets }
      </div>
    )
  }
}

export default TemperatePlanets