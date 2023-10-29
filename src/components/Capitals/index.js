import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {mainCountries: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({mainCountries: event.target.value})
  }

  mainCountry = () => {
    const {mainCountries} = this.state

    const totalActiveCapitals = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === mainCountries,
    )

    return totalActiveCapitals.country
  }

  render() {
    const {mainCountries} = this.state
    const country = this.mainCountry(mainCountries)
    return (
      <div className="main-container">
        <div className="main-card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="card-container">
            <select
              className="capitalSelect"
              value={mainCountries}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="main-options"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="main-paragraph">is capital of which country?</p>
          </div>
          <p className="main-display-country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
