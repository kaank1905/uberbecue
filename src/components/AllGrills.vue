<template>
  <div class="AllGrills">
    <div class="Grillinfo" v-for="item in items">
      <ul>
        <li>
          <h1>Bezeichnung: </h1>{{ item.Bezeichnung }}
        </li>
        <li>
          <h1>Art: </h1>{{ item.Art }}
        </li>
        <li>
          <h1>Zustand: </h1>{{ item.Zustand }}
        </li>
        <li>
          <h1>Ort: </h1>{{ item.Ort }}
        </li>
        <li>
          <h1>ID: </h1>{{ item.id }}
        </li>
      </ul>
    </div>
    <br>
    <button type="button" class="btn btn-danger" v-on:click="backHome"><i class="glyphicon glyphicon-home"></i> Zurück zur Homepage</button>
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
    background-image: url(../assets/background.jpg);
  }
  .Grillinfo{
    display: inline-block;
    padding-right: 100px;
    width: 300px;
  }
  h1{
    font-size: 24px;
    color: goldenrod;
    font-style: italic;
  }
  .btn-danger{
    border-color: white;
  }
  .btn-danger:hover{
    border-color: white;
    background-color: darkgoldenrod;
  }
</style>
