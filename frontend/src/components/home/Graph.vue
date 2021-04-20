<template>
  <v-container>
    <v-row class="justify-end pr-10">
      <v-sheet elevation="4" class="rounded-xl mb-4">
        <apexchart ref="tempChart" type="area" width="800" height="395" :options="tempChartOptions" :series="tempseries"></apexchart>
      </v-sheet>
      <v-sheet elevation="4" class="rounded-xl">
        <apexchart ref="humdChart" type="area" width="800" height="395"  :options="humdChartOptions" :series="humdseries"></apexchart>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      graphWidth: 800,
      graphHeight: 400,
      tempseries: [
        {
          name: 'Temperature',
          data: [31, 40, 28, 51, 42, 109, 100, 19, 77, 81],
        } 
      ],
      humdseries: [
        {
          name: 'Humidity',
          data: [11, 32, 45, 32, 34, 52, 41, 76, 11, 43],
        } 
      ],
      tempChartOptions: {
        chart: {          
          type: 'area',
          toolbar: {
            show: false
          }
        },
        colors: ['#FF9800'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        }
      },
      humdChartOptions: {
        chart: {
          type: 'area',
          toolbar: {
            show: false
          }
        },
        colors: ['#03A9F4'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        }
      }
    }   
  },
  methods: {
    setData(data) {
      this.tempseries[0].data = data.temperature
      this.humdseries[0].data = data.humidity
      this.$refs["tempChart"].updateSeries(this.tempseries);
      this.$refs["humdChart"].updateSeries(this.humdseries);
    },
    getData() {
      // let URL = "http://127.0.0.1:8005/data?amount=15"
      // fetch(URL)
      // .then((response) => response.json())
      // .then((data) => {
      //   let datapoints = JSON.parse(data)
      //   this.setData(datapoints)
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    } 
  },
  mounted() {
    // setInterval(() => {
    //     this.getData()}, 3000)
  }
}
</script>

<style scoped>

</style>