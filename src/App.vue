<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <router-link to="/"></router-link>
=======
      <router-link to="/">商品列表</router-link>
>>>>>>> faf7d14a1014b21116e7498ba74a027ba9fcf47f
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
