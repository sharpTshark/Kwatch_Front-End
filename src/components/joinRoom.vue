<template>
  <div>
    <div>
      join room component
    </div>
    <input v-model="roomId" type="text" name="roomId" id="roomId" placeholder="room-id">

    <h5 v-if="error !== 'none'">{{error}}</h5>

    <button @click="joinRoom">join room</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'joinRoom',
  data() {
    return {
      roomId: '',
      error: this.$route.params.error,
      redirect: this.$route.params.roomId,
    }
  },
  methods: {
    joinRoom() {
      axios .get('http://192.168.1.29:3000/rooms/'+this.roomId)
            .then(res => {
              if      (res.data.valid)  this.$router.push('/room/roomId='+this.roomId)
              else                      this.$router.push('/room/roomAction=join/error=room not found/join=none')
            })
            .catch(err => console.log(err))
    }
  },
  created() {
      if (this.redirect !== 'none') {
        this.roomId = this.redirect
        this.joinRoom()
      }
  },
  watch: {
    '$route.params.error': function() {
      this.error = this.$route.params.error
    }
  }
}
</script>

<style scoped>

  h5 {
    color: red;
  }

</style>