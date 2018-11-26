<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/create">Create Customer</router-link> | 
      <router-link to="/list">Show All</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCustomer from './components/CreateCustomer.vue'
import ShowAll from './components/ShowAll.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/create', component: CreateCustomer },
  { path: '/list', component: ShowAll }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default {
  name: 'app',
  router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: darkgreen;
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
