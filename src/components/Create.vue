<template>
  <div class="Create">
    <h1>{{ msg }}</h1>





    <form id="form" method="POST" action="http://localhost:3000/api/Grills"> <!-- post of form to api listening at port 3000 -->
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
        <input id="Bezeichnung" v-model="info.Bezeichnung" type="text" name="Bezeichnung" class="form-control" placeholder="Bezeichnung">
      </div>
      <p></p>

            <div class="input-group">  <!-- div container containing grill options-->
          <span class="input-group-addon"><i class="glyphicon glyphicon-fire"></i></span>
                <select class="form-control" id="Art" name="Art" v-model="info.Art">
                    <option>Holzkohle Grill</option>
                    <option>Gas Grill</option>
                    <option>Elektro Grill</option>
                    <option>Sonstiges</option>
                  </select> <!-- different option of grills to choose from -->
                  </div>
          <p></p>

            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-ok"></i></span>
                <select class="form-control" id="Zustand" name="Zustand" v-model="info.Zustand">
                    <option>Neuwertig</option>
                    <option>Gut</option>
                    <option>Abgenutzt</option>
                  </select> <!-- different options for the grills to choose from -->
                  </div>
          <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="Ort" v-model="info.Ort" type="text" name="Ort" class="form-control" placeholder="Ort">
      </div>
      <p></p>
 <button type="submit" v-on:click="redirect" class="btn btn-success"><i class="glyphicon glyphicon-ok"></i> Bestätigen</button>
    </form>

<p></p>
 <button type="button" class="btn btn-danger" v-on:click="redirect"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>

 <button type="button" class="btn btn-danger" v-on:click="backHome"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>

  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Verleihe deinen Grill und verdiene Bares',
      info: {
        Art: '',
        Bezeichnung: '',
        Zustand: '',
        Ort: ''
      }
    }
  },
  methods: {
    backHome: function () {
      window.location.href = 'http://localhost:8080/#/'
    }, <!-- function for the back home button tells the page to reference to localhost on port 8080 -->
    redirect: function () {
      window.setTimeout(function () {
        window.location.href = 'http://localhost:8080/#/'
      }, 500)
    } <!-- function for the redirect tells the page to reference to localhost on port 8080 -->
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
form {

margin-left: 30%;
margin-right: 30%;
}
</style>
