<template>

  <div id="App" class="">
    
    <div id="nav">
      <div class="link-wrapper container d-flex justify-content-between">
        <div class="logo-wrapper">
          <router-link id="nav-link" class="logo" to="/"><h1>K-Watch</h1></router-link>
        </div>

        <div class="links">
          <router-link id="nav-link" class="link" to="/contact">Contact</router-link>
          <input v-model="roomCode" type="text" name="joinRoom" id="joinRoom" placeholder="Room code...">
          <a @click="joinRoom()" id="nav-link" class="link">join a room</a>
          <router-link id="nav-link" class="link" to="/room/roomAction=create/error=non/join=none">create a room</router-link>
        </div>
      </div>
    </div>

    <div class="content container">
      <router-view class="" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      roomCode: null
    }
  },
  methods: {
    joinRoom() {
      if (this.roomCode !== null) {
        this.$router.push('/room/roomAction=join/error=room%20not%20found/join='+this.roomCode)
      } else {
        this.$router.push('/room/roomAction=join/error=none/join=none')
      }
    }
  }
}
</script>

<style>

  #app {
    font-family: Rowdies;
  }

  #nav {
    position: fixed;
    top: 0;
    left: 0;

    background-color: #FFD0E6;
    height: 60px;
    width: 100%;
  }

  .link-wrapper {
    max-width: 1900px;
    padding: 13px 100px;
  }

  .link-wrapper input {
    border-radius: 3px;
    border: none;
    background-color: #FFFFFF;
    font-size: 12px;
    padding: 3px;
  }

  .link {
    padding: 0px 20px;
  }

  #nav-link {
    cursor: pointer;
    color: #4A4A4A;
    text-decoration: none;
  }

  .content {
    padding: 0px 100px;
    margin-top: 140px;
    max-width: 1900px;
  }

  h1 {
    font-size: 30px;
  }
  
</style>
