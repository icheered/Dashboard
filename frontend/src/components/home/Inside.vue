<template>
  <v-sheet elevation="4" class="rounded-xl mr-1" width="400px">
    <v-container fluid>
      <v-col>
        <v-row>
          <v-icon large class="pl-4 pb-5">
            fa-home
          </v-icon>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-thermometer-half" :value="temperature" suffix="°C"></InfoBlock>
        </v-row>
        <v-row>
          <InfoBlock icon="fa-tint" :value="humidity" suffix="%"></InfoBlock>
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
          humidity: 0
        }
    },
    methods: {
      setTemp() {
        this.temperature = 0
      },
      setHumd() {
        this.humidity = 0
      }
    },
    mounted() {
    // setInterval(() => {
    //     this.temp()}, 1000)
    // setInterval(() => {
    //     this.humd()}, 1000)
  }
}
</script>

<style scoped>
</style>