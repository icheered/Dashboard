<template>
  <v-container>
    <v-row class="justify-end pr-10">
      <v-sheet elevation="4" class="rounded-xl mb-4">
        <apexchart ref="cryptoChart" width="800" height="395" :options="cryptoChartOptions" :series="cryptoSeries"></apexchart>
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
      cryptoSeries: [
        {
          name: 'Crypto',
          data: [],
        } 
      ],
      humdseries: [
        {
          name: 'Humidity',
          data: [11, 32, 45, 32, 34, 52, 41, 76, 11, 43],
        } 
      ],
      cryptoChartOptions: {
        chart: {          
          type: 'line',
          toolbar: {
            show: false
          },
        },
        title: {
            text: "Crypto",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '50px',
              fontWeight:  'bold',
              color:  '#263238'
            },
        },
        colors: ['#FF9800'],
        dataLabels: {
          enabled: false
        },
        noData: {
          text: 'Loading...'
        },
        stroke: {
          curve: 'smooth',
          width: 4
        },
        yaxis: {
          opposite: true,
          forceNiceScale: true,
          labels: {
            formatter: function(val, index) {
              return "€" + Number(val).toFixed(0);
            },
            style: {
              fontSize: '15px',
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function(value) {
              if(typeof value == "string")
              {
                var dateTimeParts = value.split('T')
                var date = dateTimeParts[0]
                var time = dateTimeParts[1].split(".")
                var timeParts = time[0].split(":")
                var finalTime = timeParts[0] + ":" + timeParts[1]
                return finalTime
              }
              else{
                return value
              }
            },
            //rotate: 0,
            hideOverlappingLabels: true,
            rotate: 0,
            style: {
              fontSize: '15px',
            },
            offsetX: 3,
          },
          tickAmount: 10,
        },
      },
      humdChartOptions: {
        chart: {
          type: 'bar',
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
      //this.$refs["tempChart"].updateSeries(this.tempseries);
      //this.$refs["humdChart"].updateSeries(this.humdseries);
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
    },
    updateCryptoSeries(datapoints){
      this.$refs["cryptoChart"].updateSeries([{
        name: 'Portfolio',
        data: datapoints
      }]);
    },
    getTotalCryptoData() {
      let URL = "https://dashboard.icheered.nl/ctb/api/history/total?datapoints=1000" 
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.updateCryptoSeries(data)
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  },
  mounted() {
    this.getTotalCryptoData()
    setInterval(() => {
        this.getTotalCryptoData()}, 60000)
  }
}
</script>

<style scoped>

</style>

