<template>
  <div class="card" v-if="data != none">
    <div class="card-body">
      <span class="card-title h4">{{ data.name }} &bull; {{ kelvinToCelsius(data.main.temp) }}&deg;C</span>
      <span class="fas weather-icon" :class="weatherIcon()"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherTile',
  props: ['data'],
  methods: {
    kelvinToCelsius(temp){
      return Math.round(temp - 273.15)
    },
    weatherIcon(){
      switch(this.data.weather[0].main){
        case 'Clouds': return 'fa-cloud';
        case 'Sun': return 'fa-sun'
        case 'Rain': return 'fa-cloud-rain'
        default: return 'fa-sun'
      }
    }
  },
}
</script>

<style scoped>
  .card{
    padding-top: .6em;
  }

  .weather-icon{
    font-size: 3em;
    float: right;
  }
</style>
