<template>
  <div>
    <div>
      <div>
        create room component
      </div>
        <input v-model="settings.roomName" type="text" name="roomName" id="roomName" placeholder="Enter roomName...">
        <button @click="createRoom()">Create Room</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      settings: {
        roomId: '',
        roomName: '',
        roomAdmin: ''
      }
    }
  },
  methods: {
    createRoom() {
      this.settings.roomAdmin = this.username
      axios .post('http://192.168.1.29:3000/createRoom', this.settings)
            .then(res => {
                if (res.data.valid) {
                  this.settings = res.data.settings
                  this.$router.push('/room/roomAction=join/error=none/join='+this.settings.roomId)
                } else console.log('not valid')

                console.log('a room has been created')
            })
            .catch(err => console.log(err))
    }
  }

}
</script>

<style scoped>



</style>