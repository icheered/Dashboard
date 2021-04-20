<template>
  <v-sheet elevation="4" class="rounded-xl mr-1" width="400px">
    <v-container fluid>
      <v-col>
        <v-row>
          <v-icon large class="pl-5 pb-5">
            fa-tree
          </v-icon>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-thermometer-half" :value="temperature" suffix="°C"></InfoBlock>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-user" :value="feelslike" suffix="°C"></InfoBlock>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-temperature-high" :value="maxtemperature" suffix="°C"></InfoBlock>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-tint" :value="humidity" suffix="%"></InfoBlock>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-cloud-showers-heavy" :value="precipitation" suffix="%"></InfoBlock>
        </v-row>
      </v-col>
    </v-container>
  </v-sheet>
</template>


<script>

import InfoBlock from '../home/InfoBlock'


export default {
    components: {
        "InfoBlock": InfoBlock
    },
    data() {
        return {
          temperature: 0,
          feelslike: 0,
          humidity: 0,
          maxtemperature: 0,
          precipitation: 0
        }
    },
    methods: {
      setTemp(temp) {
        this.temperature = temp.toFixed(1)
      },
      setHumd(humd) {
        this.humidity = humd.toFixed(1)
      },
      setMaxtemp(maxTemp) {
        this.maxtemperature = maxTemp.toFixed(1)
      },
      setPrecip(precip) {
        this.precipitation = (precip * 100).toFixed(1)
      },
      setFeelsLike(feelsLike) {
        this.feelslike = feelsLike.toFixed(1)
      },
      getWeatherData(){
        // 1000 api calls per day
        let URL = "https://api.openweathermap.org/data/2.5/onecall?lat=52.23&lon=6.85&units=metric&appid=2f025c6c11a61b8a89399a9c02152708"
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.setTemp(data.current.temp)
          this.setHumd(data.current.humidity)
          this.setFeelsLike(data.current.feels_like)
          this.setMaxtemp(data.daily[0].temp.max)
          this.setPrecip(data.daily[0].pop)
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
    mounted() {
      this.getWeatherData()
      setInterval(() => {
        this.getWeatherData()}, 300000)
    // setInterval(() => {
    //     this.temp()}, 1000)
    // setInterval(() => {
    //     this.humd()}, 1000)
    // setInterval(() => {
    //     this.maxtemp()}, 1000)
    // setInterval(() => {
    //     this.precip()}, 1000)
  }
}
</script>

<style scoped>

</style>