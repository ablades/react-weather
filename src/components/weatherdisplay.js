import React from 'react'

function WeatherDisplay(props) {

    const { main, description, icon, temp, pressure, humidity, t_min, t_max } = props

    return (
        <div className="WeatherDisplay">
            <div>Title: {main}</div>
            <div>Desc: {description}</div>
            <div>Icon: {icon}</div>
            <div>Temp: {temp}</div>
            <div>Pressure: {pressure}</div>
            <div>Humidity: {humidity}</div>
            <div>Temp Min: {t_min} Max:{t_max}</div>
        </div>
    )

}

export default Weather