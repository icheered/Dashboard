<template>
  <v-container class="px-1 py-1">
    <v-row class="pb-5">
      <v-col justify="center" align="left" class="pl-8 pt-5">
        <v-icon left x-large>{{icon}}</v-icon>
      </v-col>
      <v-col justify="right" align="right" class="pa-0 ma-0">
        <h1 class="custom ml-n15" >{{value}}</h1>
      </v-col>   
      <v-col justify="right" align="right" class="pa-0 ma-0 pr-5">
        <h1 class="custom" align="right" justify="right"> {{suffix}}</h1>
      </v-col>   
    </v-row>
  </v-container>
</template>

<script>
export default {
    props: {
        icon: String,
        value: Number,
        suffix: String
    },
}
</script>

<style scoped>
.custom {
  font-size: 3.5em;
  font-weight: 500;
}
</style>