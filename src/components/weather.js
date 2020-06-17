import React, { Component } from 'react'
import './App.css'
import WeatherDisplay from './weatherdisplay.js'

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '94010', // Default input value
            weatherData: null, // API Data
        }
    }

    handleSubmit(e) {
        e.preventDefault() 

        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

        const zipcode = this.state.inputValue

        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apikey}`
        // Get Data from api
        fetch(url).then(res => {
            return res.json() // response is returned into then
        }).then((json) => {
            this.setState({
                weatherData: json
            })
        }).catch((err) => {
            this.setState({weatherData: null}) // Resets state of weather data

            console.log('-- Error fetching --')
            console.log(err.message)
        })

    }

    renderWeather() {
        if (this.state.weatherData === null) {
            return undefined
        }


        const { main, description, icon } = this.state.weatherData.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = this.state.weatherData.main 


        return (
            <WeatherDisplay
              main={main}
              description={description}
              icon={icon}
              temp={temp}
              pressure={pressure}
              humidity={humidity}
              t_min={temp_min}
              t_max={temp_max}
            />
          )
    }

    render() {
        return(
            <div className="WeatherForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        value={this.state.inputValue}
                        onChange={e => this.setState({inputValue: e.target.value})} // Update value as user types
                        type="text"
                        pattern="(\d{5}([\-]\d{4})?)" // regex pattern for input field
                        placeholder="enter zipcode"
                    />

                    <button type="submit">Submit</button>
                </form>

                {this.renderWeather()}
            </div>
        )
    }
}

export default Weather