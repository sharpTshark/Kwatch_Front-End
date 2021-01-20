<template>

  <div id="App" class="">

    <div class="nav-wrapper"></div>
    
    <nav class="navbar navbar-expand-lg" >
      <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><h1>K-Watch</h1></router-link>
        <button @click="rot()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fas fa-plus"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <hr>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="link nav-link" to="/">home</router-link>
            </li>
            <hr>
            <li class="nav-item input">
              <input class="link nav-link" v-model="roomCode" type="text" name="joinRoom" id="joinRoom" placeholder="Room code...">
            </li>
            <li class="nav-item">
              <a @click="joinRoom()" class="link nav-link">join a room</a>
            </li>
            <li class="nav-item">
              <router-link class="link nav-link" to="/room/roomAction=create/error=non/join=none">create a room</router-link>
            </li>
            <hr>
            <li class="nav-item">
              <router-link class="link nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="content container">
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      roomCode: null,
      navToggled: false
    }
  },
  methods: {
    joinRoom() {
      if (this.roomCode !== null) {
        this.$router.push('/room/roomAction=join/error=room%20not%20found/join='+this.roomCode)
      } else {
        this.$router.push('/room/roomAction=join/error=none/join=none')
      }
    },
    rot() {
      const toggler = document.getElementsByClassName('navbar-toggler-icon')[0]
      if (this.navToggled) {
        toggler.style.transform = 'rotate(0deg)'
        this.navToggled = false
      } else {
        toggler.style.transform = 'rotate(45deg)'
        this.navToggled = true
      }
    }
  }
}
</script>

<style>

  #app {
    font-family: Rowdies;
  }

  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 60px;

    z-index: 10;

    background-color: #FFD0E6;
  }

  nav {
    background: #FFD0E6;
    font: normal normal 300 18px/22px Rowdies;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;

    height: 60px;

    z-index: 1000;
  }

  nav hr {
    border: 1px solid rgb(24, 24, 24);
    margin: 0px 10px;
  }

  ul hr {
    width: 80px;
  }

  nav ul {
    background: #FFD0E6;
  }


  nav i {
    font-size: 40px;
    margin-top: -5px;
  }

  span {
    transition: 0.2s;
  }

  .container {
    max-width: 1900px;
    padding: 0px 100px;
  }

  nav .container-fluid {
    max-width: 1700px;
    padding: 0;
    background: #FFD0E6;
  }

  .content {
    padding: 0px 100px;
    margin-top: 130px;
    max-width: 1900px;
    overflow: hidden;
  }

  .nav-item {
    padding: 10px;
  }

  .navbar-brand {
    padding: 0 10px;
  }

  nav a {
    color: #4A4A4A;
    text-decoration: none;
  }

  h1 {
    font-size: 30px;
  }

  a:hover {
    cursor: pointer;
  }

  nav .input {
    display: none;
  }

  button {
    z-index: 1000;
  }

  @media only screen and ( min-width: 990px) {
    nav .input {
      display: block;
    }

    nav hr {
      display: none;
    }

    nav input {
      padding: 0;
      width: 134px;
      border-radius: 3px;
      border: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      padding: 0px 20px;
      margin-top: 130px;
      max-width: 1900px;
      overflow: hidden;
    }

    .container {
      max-width: 1900px;
      padding: 0px 20px;
    }

  }
  
</style>
