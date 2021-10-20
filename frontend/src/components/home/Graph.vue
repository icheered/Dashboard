<template>
  <v-container>
    <v-row class="justify-end pr-10">
      <v-sheet elevation="4" class="rounded-xl mb-4">
        <apexchart ref="cryptoChart" width="800" height="395" :options="cryptoChartOptions" :series="cryptoSeries"></apexchart>
      </v-sheet>
      <v-sheet elevation="4" class="rounded-xl">
        <apexchart ref="stockChart" type="area" width="800" height="395"  :options="stockChartOptions" :series="stockSeries"></apexchart>
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
      stockSeries: [
        {
          name: 'Stock',
          data: [],
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
              fontSize:  '40px',
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
              fontSize: '20px',
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
              fontSize: '20px',
            },
            offsetX: 3,
          },
          tickAmount: 10,
        },
      },
      stockChartOptions: {
        chart: {          
          type: 'line',
          toolbar: {
            show: false
          },
        },
        title: {
            text: "Stocks",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '40px',
              fontWeight:  'bold',
              color:  '#263238'
            },
        },
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
              fontSize: '20px',
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function(value) {
              return value
            },
            //rotate: 0,
            hideOverlappingLabels: true,
            rotate: 0,
            style: {
              fontSize: '20px',
            },
            offsetX: 3,
          },
          tickAmount: 5,
        },
      },
    }   
  },
  methods: {
    updateCryptoSeries(datapoints){
      this.$refs["cryptoChart"].updateSeries([{
        name: 'Portfolio',
        data: datapoints
      }]);
    },
    updateStockoSeries(datapoints){
      this.$refs["stockChart"].updateSeries([{
        name: 'Portfolio',
        data: datapoints
      }]);
    },
    getTotalCryptoData() {
      let URL = "https://dashboard.icheered.nl/ctb/api/history/total?datapoints=100" 
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.updateCryptoSeries(data)
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    getTotalStockData() {
      let URL = "https://dashboard.icheered.nl/stb/api/history/total" 
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.updateStockoSeries(data)
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  },
  mounted() {
    this.getTotalCryptoData()
    this.getTotalStockData()
    // Update crypto data every minute
    setInterval(() => { this.getTotalCryptoData() }, 60000)
    // Update stock data every 12 hrs
    setInterval(() => { this.getTotalStockData() }, 43200000)
  }
}
</script>

<style scoped>

</style>

