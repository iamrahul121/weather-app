import React from 'react'
import { useState, useEffect } from 'react'
import WindImg from './Img/wind.png'
import PressureImg from './Img/pressure.png'
import SunsetImg from './Img/sunset.png'
import HumidityImg from './Img/humidity.png'
import Haze from './Img/haze.png'
import Cloudy from './Img/cloudy.png'
import Sunny from './Img/sunny.png'
import Rain from './Img/rain.png'
import Clear from './Img/clear.png'
import Faviconn from './Img/faviconn.png'

const Home = ({data}) => {

    const [weatherState, setWeatherState] = useState();

    const {temp, weathermood, name, country, sunset, humidity, pressure, speed} = data

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
            case "Clouds":
                setWeatherState(Cloudy)
                break;
            case "Smoke":
                setWeatherState(Haze)
                break;
            case "Clear":
                setWeatherState(Faviconn)
                break;
            case "Haze":
                setWeatherState(Haze)
                break;
        
            default:
                setWeatherState(Sunny)
                break;
        }
      }
    }, [weathermood])
    console.log(weathermood)
    

    let sec = sunset;
    let sunsetTime = new Date (sec * 1000)
    let finalTime = `${sunsetTime.getHours()}: ${sunsetTime.getMinutes()}`

    return (
        <div className="home">
            <div className="box">
                {/* <i className={weatherState}></i> */}
                <img src={weatherState} alt="img" />
            </div>

            <div className="box2">
                <div className="col_1">
                    <h2>{temp}&deg;</h2>
                    <div className="col_2">
                        <h3>{weathermood}</h3>
                        <p>{name} {country}</p>
                    </div>
                </div>

                <div className="col_3">
                    {new Date().toLocaleString()}
                </div>
            </div>

            <div className="box3">
                <div className="col_4">
                    <img src={SunsetImg} alt="wind" />
                    <div className="col">
                        <p>{finalTime}</p>
                        <span>Sunset</span>
                    </div>
                </div>

                <div className="col_4">
                    <img src={HumidityImg} alt="wind" />
                    <div className="col">
                        <p>{humidity}</p>
                        <span>Humidity</span>
                    </div>
                </div>

            </div>
            <div className="box3">
                <div className="col_4">
                    <img src={PressureImg} alt="wind" />
                    <div className="col">
                        <p>{pressure}</p>
                        <span>Pressure</span>
                    </div>
                </div>

                <div className="col_4">
                    <img src={WindImg} alt="wind" />
                    <div className="col">
                        <p>{speed}</p>
                        <span>Wind</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home