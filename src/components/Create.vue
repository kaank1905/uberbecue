<template>



  <div class="Create">

      <div class ="container">
        <div class ="block">
          <div class ="header">
            <h1>{{ msg }}</h1>
          </div>
        </div>
      </div>






    <form id="form" method="POST" action="http://localhost:3000/api/Grills"> <!-- post of form to api listening at port 3000 -->
              {{typ}}
      <p></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
        <input id="Bezeichnung" v-model="info.Bezeichnung" type="text" name="Bezeichnung" class="form-control" placeholder="Bezeichnung">
      </div>
      <p></p>
              {{art}}
      <p></p>
            <div class="input-group">  <!-- div container containing grill options-->
          <span class="input-group-addon"><i class="glyphicon glyphicon-fire"></i></span>
                <select class="form-control" id="Art" name="Art">
                    <option>Holzkohle Grill</option>
                    <option>Gas Grill</option>
                    <option>Elektro Grill</option>
                    <option>Sonstiges</option>
                  </select> <!-- different option of grills to choose from -->
                  </div>
          <p></p>
              {{zustand}}
      <p></p>
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-ok"></i></span>
                <select class="form-control" id="Zustand" name="Zustand">
                    <option>Neuwertig</option>
                    <option>Gut</option>
                    <option>Abgenutzt</option>
                  </select> <!-- different options for the grills to choose from -->
                  </div>
          <p></p>
              {{ort}}
      <p></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
        <input id="Ort" v-model="info.Ort" type="text" name="Ort" class="form-control" placeholder="Ort">
      </div>
      <p></p>

      <div class ="submit">

 <button type="submit" v-on:click="redirect" class="btn btn-success"><i class="glyphicon glyphicon-ok"></i> Bestätigen</button>
      </div>
    </form>


<p></p>

    <div class ="back">
 <button type="button" class="btn btn-danger" v-on:click="redirect"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>

 <button type="button" class="btn btn-danger" v-on:click="backHome"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Verleihe deinen Grill und verdiene Bares',
      typ: 'Um welchen Typ handelt es sich?',
      art: 'Um welche Art von Grill handelt es sich? (Bitte auswählen)',
      zustand: 'In welchem Zustand befindet sich der Grill? (Bitte auswählen)',
      ort: 'Wo kann man den Grill abholen?',
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
    },
    redirect: function () {
      window.setTimeout(function () {
        window.location.href = 'http://localhost:8080/#/'
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1 {
  margin-bottom: 100px;

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
  margin-top: 50px;
  font-size: 20px;
}
  div.Create {

    opacity: 1;
    background-image: url(../assets/background.jpg);
    color: white;

  }
  div.submit {
    margin-top: 50px;
  }
  div.back {
    margin-top: 25px;
  }
  div.container {
    position: relative;
    width: 1920px;
    height: 200px;
  }
div.block {
  background-color: #921C1C;
  filter: alpha(opacity=60);
  /* IE */
  -moz-opacity: 0.6;
  /* Mozilla */
  opacity: 0.6;
  /* CSS3 */
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
div.header {
    margin-top: 50px;
}



</style>
