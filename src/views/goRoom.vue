<template>
    <div>
        <div class="button">
            <button @click="$router.push('/room/roomAction=join/error=none/join=none')">Join Room</button>
            <button @click="$router.push('/room/roomAction=create/error=none/join=none')">Create Room</button>
        </div>
        <div class="form">
            <joinRoom v-if="roomAction == 'join'" />
            <createRoom v-if="roomAction == 'create'" />
        </div>
    </div>
</template>

<script>
import axios from "axios"

import joinRoom from "@/components/joinRoom";
import createRoom from "@/components/createRoom";

export default {
    name: 'join / create room',
    components: {
        joinRoom,
        createRoom
    },
    data() {
        return {
            roomAction: this.$route.params.roomAction
        }
    },
    watch: {
        '$route.params.roomAction': function(path) {
            this.roomAction = path
        }
    }
}
</script>

<style scoped>

    .form {
        padding-top: 100px;
    }
    
</style>