<template>
<v-sheet class="pl-15 pt-10">
  <v-container class="pa-0">
    <v-col left>
        <v-row class="clock" justify="center" >
          <h1 class="clock text-left">
            {{currenttime}}
          </h1>
        </v-row>
        <v-row class="custom" justify="center" >
          <h1 class="custom text-left">
            {{currentweekday}}
          </h1>
        </v-row>
        <v-row class="custom" justify="center" >
          <h1 class="custom text-left">
            {{currentmonth}}
          </h1>
        </v-row>
        <v-row class="custom" justify="center" >
          <h1 class="custom text-left">
            {{currentmonthday}}
          </h1>
        </v-row>
      </v-col>
  </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      currenttime: '11:11',
      currentweekday: "Weekday",
      currentmonth: "Month",
      currentmonthday: "11",
      updateInterval: ""
    }
  },
  methods: {
    updateTime() {
      var today = new Date();

      this.currenttime = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      this.currentweekday = days[today.getDay()]
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.currentmonth = months[today.getMonth()]
      var curday = today.getDate()
      var st = [1, 21, 31]
      var nd = [2, 22]
      var rd = [3, 23]
      if(st.includes(curday)){
        curday += "st"
      }
      else if(nd.includes(curday)){
        curday += "nd"
      }
      else if(rd.includes(curday)){
        curday += "rd"
      }
      else {
        curday += "th"
      }
      this.currentmonthday = curday
    }
  },
  mounted() {
    this.updateInterval = setInterval(() => {
        this.updateTime()}, 1000)
  }
}

</script>

<style scoped>
.custom {
  font-size: 2.5em;
  font-weight: 400;
}
.clock {
  font-size: 3.5em;
  font-weight: 400;
}
</style>