<template>
    <div>
        <input v-model="username" type="text" name="username" id="username" placeholder="username...">
        <button @click="useUsername()">join</button>
    </div>
</template>

<script>
export default {
    name: 'username',
    data() {
        return {
            username: '',
            roomAction: this.$route.params.roomAction
        }
    },
    methods: {
        useUsername() {
            sessionStorage.setItem('username', this.username)
            if (this.roomAction == 'join' || this.roomAction == 'create') {
                this.$router.push('/room/roomAction='+this.roomAction+'/error=none/join=none')
            } else {
                this.$router.push('/room/roomAction=join/error=none/join='+this.roomAction)
            }
        }
    }
}
</script>

<style scoped>

</style>