<template>
  <div class="Search">
    <h1>{{ msg }}</h1>

    <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 300px"
      >
        <gmap-marker
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>

      </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPq2g_BDqHWgQi4aBW240pQ_rT6RE0b4Q',
    v: 'OPTIONAL VERSION NUMBER'
      // libraries: 'places', //// If you need to use place input
  }
})

export default {
  name: 'search',
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
