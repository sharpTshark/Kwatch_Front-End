<template>
    <div id="room">
        <div>
            <div class="room-info">
                {{settings.roomId}} ||| {{settings.roomName}} ||| {{settings.roomAdmin}}
            </div>
            <videoComp :queue="roomQueue" :io="io" />
            <search :searchResults="searchQueue" :io="io" />
        </div>
        <ul>
            <li v-for="attendee in roomAttendees" key="attendee">{{attendee.username}} ||| {{attendee.socketId}}</li>
        </ul>
    </div>
    
</template>

<script>

import axios from 'axios'
import io from 'socket.io/client-dist/socket.io'

import videoComp from "@/components/video";
import search from "@/components/searchResult";

export default {
    name: "room",
    components: {
        videoComp,
        search
    },
    data() {
        return {
            io: null,
            searchMeta: 'itzy',
            valid: false,
            settings: {
                roomId: this.$route.params.roomId,
                roomName: ''
            },
            roomAttendees: [],
            username: sessionStorage.getItem('username')
        }
    },
    methods: {
        buildRoom() {
            axios   .get('http://192.168.1.29:3000/rooms/'+this.settings.roomId)
                    .then(res => {
                        if (res.data.valid) {
                            this.valid = true
                            this.settings = res.data.settings
                        } else {
                            this.$router.push('/room/roomAction=join/error=room%20not%20found/join=none')
                        }
                    })
                    .catch(err => {
                        console.log('something went wrong')
                        console.log(err)
                    })
        },
        checkuser() {
            if (sessionStorage.getItem('username')) return true 
            else return false
        },
        asignUsername() {
            sessionStorage.setItem('username', this.username)
        }
    },
    created() {
        this.buildRoom()

        this.io = io('http://192.168.1.29:3000', {
            query: {
                roomId: this.settings.roomId,
                username: this.username
            }
        })

        this.io.on('testroom', (data) => {
            if (data.roomInfo) {
                this.roomAttendees = data.roomInfo.roomAttendees
            } else if (data.online) {
                this.io.emit('testroom', { isOnline: { username: this.username, socketId: this.io.id } })
            } else if (data.roomUpdate) {
                this.roomAttendees = data.roomUpdate
            }
        })
    },
    mounted() {

    },
    beforeUnmount() {
        this.io.disconnect();
    }
}

</script>

<style scoped>

</style>>