<template>
  <div class="Test">
    <h1>{{ msg }}</h1>
    <div style="width: 100%; height: 300px">
          <google-map :center="center" :zoom="10" @rightclick="newMarker">
             <map-marker
               :position="m.position"
               :opacity="m.opacity"
               :draggable="m.draggable"
               @position_changed="updMarker(m, $event)"
    		   @dragend="logMarker(m)"
               v-for="m in markers"
               >
           </map-marker>
          </google-map>
        </div>


      </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  name: 'search',
  data () {
    return {
      markers: [],
      center: { lat: -19.8934596, lng: -44.0586543 }
    }
  },
  methods: {
    newMarker (mouseArgs) {
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
      console.log(createdMarker.position.lat, createdMarker.position.lng)
    }, <!-- creating marker for latitude of longitude-->
    addMarker () {
      this.markers.push({
        position: { lat: 48.8538302, lng: 2.2982161 },
        draggable: true,
        enabled: true
      })
      return this.markers[this.markers.length - 1]
    },
    updMarker (m, event) {
      m.position = {
        lat: event.lat(),
        lng: event.lng()
      }
    },
    logMarker (m) {
      console.log(m.position.lat, m.position.lng)
    }
  },
  components: {
    'googleMap': VueGoogleMaps.Map,
    'MapMarker': VueGoogleMaps.Marker
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
