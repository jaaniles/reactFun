import React, { Component } from 'react';

class Skywalkers extends Component {
  state = {
    people: []
  }
  componentWillMount() {
    const URL = "https://swapi.co/api/people/?search=skywalker"
    fetch(URL).then(response => response.json())
    .then(data => {
      const skywalkers = data.results.filter(people => people.name.includes("Skywalker"))
      this.setState({people: skywalkers})
    })
  }
  render() {
    const skywalkers = this.state.people.map(person => {
      return (
        <tr>
          <td>
            {person.name}
          </td>
          <td>
            {person.hair_color}
          </td>
          <td>
            {person.skin_color}
          </td>
          <td>
            {person.gender}
          </td>
        </tr>
      )
    })
    return (
      <div className="panel skywalkersBox">
        <h4>Skywalkers</h4>
        <table>
          <thead>
            <tr>
              <th>Who</th>
              <th>Hair color</th>
              <th>Complexity</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            { skywalkers }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Skywalkers