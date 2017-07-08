<template>
  <div class="Create">
    <h1>{{ msg }}</h1>



    <form id="form">
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="user" type="text" class="form-control" name="benutzer" placeholder="Benutzername">
      </div>
      <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="mail" type="text" class="form-control" name="mail" placeholder="E-Mail">
      </div>
      <p></p>

      <!--<div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
        <input id="passwort" type="passwort" class="form-control" name="passwort" placeholder="Passwort">
      </div>
      <p></p>-->

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input id="stadt" type="stadt" class="form-control" name="stadt" placeholder="Stadt">
      </div>
      <p></p>

      <!--<div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-road"></i></span>
        <input id="straße" type="text" class="form-control" name="straße" placeholder="Straße">
      </div>
      <p></p>-->

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="plz" type="text" class="form-control" name="plz" placeholder="PLZ">
      </div>
      <p></p>

      <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
          <select class="form-control" id="sel1">
              <option>Holzkohle Grill</option>
              <option>Gas Grill</option>
              <option>Elektro Grill</option>
              <option>Sonstiges</option>
            </select>
            </div>
    <p></p>

      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-text-size"></i></span>
        <input id="password" type="text" class="form-control" name="beschreibung" placeholder="Kurzbeschreibung">
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
