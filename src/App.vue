<template>

  <div id="App">
    
    <div id="nav">
      <router-link id="nav-link" to="/">Home</router-link>
      <router-link id="nav-link" to="/room/roomAction=join/error=none/join=none">join a room</router-link>
      <router-link id="nav-link" to="/room/roomAction=create/error=non/join=none">create a room</router-link>
      <router-link id="nav-link" to="/contact">Contact</router-link>
    </div>

    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  methods() {

  },
  created() {

  }
}
</script>

<style>

  #nav-link {
    padding: 10px;
  }
  
</style>
