<template>
  <v-container fluid class="pa-0 pt-15" fill-height>
    <v-row>
      <v-col md="3">
        <v-row class="pl-15">
          <Inside/>
        </v-row>
        <v-row class="pl-15 pt-15">
          <Outside/>
        </v-row>
      </v-col>
      
      <v-col md="3">
        <v-row>
          <DateTime/>
        </v-row>
      </v-col>
      <v-col md="6">
        <v-row>
          <Graph/>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import DateTime from '../components/home/DateTime'
import Graph from '../components/home/Graph'
import Inside from '../components/home/Inside'
import Outside from '../components/home/Outside'

export default {
  components: {
    "Graph": Graph,
    "Inside": Inside,
    "Outside": Outside,
    "DateTime": DateTime

  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
</style>