<template>
  <div class ="body">
    <div class="header">
      <h1>Grills die Ihnen zur Verfügung stehen!</h1>
    </div>
  <div class="AllGrills">
    <div class="Grillinfo" v-for="item in items">
      <ul>
        <li>
          <h3>Bezeichnung: </h3>{{ item.Bezeichnung }}
        </li>
        <li>
          <h3>Art: </h3>{{ item.Art }}
        </li>
        <li>
          <h3>Zustand: </h3>{{ item.Zustand }}
        </li>
        <li>
          <h3>Ort: </h3>{{ item.Ort }}
        </li>
        <li>
          <h3>ID: </h3>{{ item.id }}
        </li>
      </ul>
      <button class="btn btn-grilloperation" v-on:click="delete_grill">Delete</button>
      <button class="btn btn-grilloperation" v-on:click="edit_grill">Edit</button>
    </div>
    <br>
  </div>
    <div class="button">
      <button type="button" class="btn btn-danger" v-on:click="backHome"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>
    </div>
  </div>



</template>

<script>
  var grills = ''
  fetch('http://localhost:3000/api/Grills').then(function (response) {
    // Convert to JSON
    return response.json()
  }).then(function (j) {
    // Yay, `j` is a JavaScript object
    console.log('Grills:')
    console.log(j)
    grills = j
  })

  export default {
    name: 'search',
    data () {
      return {
        items: grills
      }
    },
    methods: {
      backHome: function () {
        window.location.href = 'http://localhost:8080/#/'
      },
      delete_grill: function () {
        // itemid simuliert die id, welche eigentlich übergeben werden sollte über den löschen button.
        // Leider haben wir kein funktionierende Lösung gefunden, diese Übergabe zu bewerkstelligen
        // Das Löschen des Objektes funktioniert aber mit folgender Syntax einwandfrei
        var itemid = 0
        var request = new XMLHttpRequest()
        request.open('DELETE', 'http://localhost:3000/api/Grills/' + itemid)
        request.send()
        console.log('deleted')
      },
      edit_grill: function () {
        console.log('edited')
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
    color: white;
    font-style: italic;
    font-size: 30px;
  }

  ul {
    list-style-type: none;
    margin: 15px;
    margin-left: 10%;
  }

  li {
    /*display: inline-block;*/
    text-align: left;
    font-size: 20px;
  }

  a {
    color: #42b983;
  }
  form {

    margin-left: 30%;
    margin-right: 30%;

  }

  .AllGrills {
    color: white;
    display: flex;
    flex-direction: row;

  }


  .Grillinfo{
    display: inline-block;
    padding-right: 100px;
    width: 300px;
    margin-bottom: 20px;
    width: 400px;
    border-width: 2px;
    border-style: solid;
    border-color: darkgoldenrod;
    margin-top: 50px;

  }
  h3{
    font-size: 24px;
    color: goldenrod;
    font-style: italic;
    text-decoration: underline;
  }
  .btn-danger{
    border-color: white;
  }
  .btn-danger:hover{
    border-color: white;
    background-color: darkgoldenrod;
  }
  .btn-grilloperation{
    background-color: darkblue;
    border-color: white;
    margin-left: 0;
  }
  .btn-grilloperation:hover{
    background-color: darkred;
    border-color: white;
    color: white;
  }
  .btn-grilloperation:focus{
    color: white;
  }
  .body {
    background-image: url(../assets/background.jpg);


  }
  .button {
    margin-top: 100px;
  }
  .btn.btn-grilloperation {
    background-color: darkred;
    width: 100px;
    margin-bottom: 10px;
    margin-left: 80px;
  }
  .btn.btn-grilloperation:hover {
    background-color: darkgoldenrod;
  }




</style>
