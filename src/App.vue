<template>
  <div id="app">

    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">WeatherApp</span>
    </nav>

    <div class="container">
      <div class="row">
        <div v-for="cityData in weatherData" :key="cityData.id" class="col-4">
          <weather-tile :data="cityData" :key="cityData.id" ></weather-tile>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import WeatherTile from './components/WeatherTile'

import axios from 'axios'

//import bootstrap from 'bootstrap'

export default {
  name: 'app',
	data () {
		return {
      sydneyWeatherData: JSON,
      londonWeatherData: JSON,

      weatherData: []
		}
	},
  components: {
    WeatherTile
  },
	mounted () {

    let cities = ['sydney', 'london', 'chicago', 'melbourne', 'perth', 'beijing', 'new york', 'san francisco', 'los angeles']

    for(let i = 0; i < cities.length; i++){
        axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + cities[i] + '&APPID=<YOUR_API_KEY>')
      .then(response => (this.weatherData.push(response.data)))
    }
  },
}
</script>

<style scoped>
  .container {
    margin-top: 2em;
  }

  .col-4 {
    margin-bottom: 1em;
  }
</style>
