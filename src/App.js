import React, { useState, useEffect } from 'react'

import Home from './Home'
import './App.css'

const App = () => {
  const [search, setsearch] = useState('Mumbai')
  const [data, setData] = useState({})
  const GetData = async() => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3c95564862d68edf55c81835755adebb`

      const response = await fetch(url)
      const newresponse = await response.json()
      
      const {temp, pressure, humidity} = newresponse.main;
      const {main : weathermood } = newresponse.weather[0];
      const {speed} = newresponse.wind;
      const {country, sunset } = newresponse.sys;
      const {name} = newresponse;
      
      const newObj = {
        temp, pressure, humidity, weathermood, speed, country,  sunset, name 
      }
      setData(newObj)

    } catch (error) {
      console.log(error)
    }  
  }

  useEffect(() => {
    GetData ()   
  }, []) 

  return (
    <div className='main'>
      <section className='center'>

        <div className='inp'>
          <input type="text" placeholder='Search'
            value={search} onChange={(event) => setsearch(event.target.value)} />
          <div className="btn" onClick={GetData}>Search</div>
        </div>
        <Home data = {data}/>
      </section>
    </div>
  )
}

export default App