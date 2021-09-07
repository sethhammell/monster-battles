<template>
  <!-- <div id="nav">
    <router-link to="/">Battle</router-link> |
    <router-link to="/upgrades">Upgrades</router-link> |
    <router-link to="/shop">Shop</router-link>
  </div> -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: "uni05_53";
  src: local("uni05_53"),
   url(./assets/fonts/uni05_53.ttf) format("truetype");
}

@font-face {
  font-family: "munro";
  src: local("munro"),
   url(./assets/fonts/munro.ttf) format("truetype");
}
</style>
