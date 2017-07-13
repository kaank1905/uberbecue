<template>
  <div class="AllGrills">
    <div class="Grillinfo" v-for="item in items">
      <ul>
        <li>
          {{ item.Bezeichnung }}
        </li>
        <li>
          {{ item.Art }}
        </li>
        <li>
          {{ item.Zustand }}
        </li>
        <li>
          {{ item.Ort }}
        </li>
        <li>
          {{ item.id }}
        </li>
      </ul>
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
