<template>
  <div class="hello"> <!-- class definition -->
    <img id="logo" src="../assets/loggo.png" >
    <br>
    <h1 align="center">{{ msg }}</h1> <!-- headers with different size on main page -->
    <h2 align="center">Grillparty? Kein Grill? Kein Problem!</h2>
    <h3 align="center">Leihe dir einfach und schnell den perfekten Grill!</h3>
    <a href="#/search"><button type="button" class="btn btn-primary">Jetzt einen Grill suchen</button></a>
    <a href="#/create"><button type="button" class="btn btn-primary">Einen Grill verleihen</button></a>
  <!-- reference to grills with buttons-->
  </div>

</template> <!-- close of templating -->

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Willkommen bei Uberbecue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #333;
  border:0;
  margin-top: 500px;
  padding: 12px 60px;
  font-size: 18px;
  width: 300px;
}
button:hover {
  background-color: #92252d;

}
#barbecue {
  width: 100%;
}
#logo {
  float: right;
  height:250px;
  margin-right: 50px;
  margin-top: -100px;
}
a:hover {
  color: white;
  text-decoration: none;
}
h1, h2, h3 {
  font-weight: normal;
  color: white;

}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;

}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

a {
  color: white;

}
div.hello{
  background-image: url(../assets/bannerrr.jpg);
  height: 800px;
  align: center;
}
</style>
