<template>
  <div class="Search">
    <h1>{{ msg }}</h1>

    <gmap-map
        :center="center"
        :zoom="8"
        style="width: 1920px; height: 500px"
      >
        <gmap-marker
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>

    <button type="button" class="btn btn-danger" v-on:click="backHome"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>

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
      center: {lat: 48.2, lng: 16.4},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }, {
        position: {lat: 47.9, lng: 12.2}
      }]
    }
  },
  methods: {
    backHome: function () {
      window.location.href = 'http://localhost:8080/#/'
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

.btn-danger{
  border-color: white;
}
.btn-danger:hover{
  border-color: white;
  background-color: darkgoldenrod;
}
</style>
