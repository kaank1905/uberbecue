<template>
  <div class="Create">
    <h1>{{ msg }}</h1>





    <form id="form">
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
        <input id="Bezeichnung" type="text" class="form-control" name="benutzer" placeholder="Bezeichnung">
      </div>
      <p></p>




            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-fire"></i></span>
                <select class="form-control" id="Art">
                    <option>Holzkohle Grill</option>
                    <option>Gas Grill</option>
                    <option>Elektro Grill</option>
                    <option>Sonstiges</option>
                  </select>
                  </div>
          <p></p>

            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-ok"></i></span>
                <select class="form-control" id="Zustand">
                    <option>Neuwertig</option>
                    <option>Gut</option>
                    <option>Abgenutzt</option>
                  </select>
                  </div>
          <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="Ort" type="text" class="form-control" name="plz" placeholder="Ort">
      </div>
      <p></p>

    </form>

 <button type="submit" class="btn btn-success"><i class="glyphicon glyphicon-ok"></i> Bestätigen</button>
<p></p>
 <button type="button" class="btn btn-danger" v-on:click="backHome"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>

  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Verleihe deinen Grill und verdiene Bares'
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
form {

margin-left: 30%;
margin-right: 30%;
}
</style>
