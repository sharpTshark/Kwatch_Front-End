<template>

    <div class="" id="room">
        <div class="row">

            <div @click="hideBtn()" id="arrow-btn" class="arrow-btn">
                <i class="fas fa-chevron-left"></i>
            </div>

            <div class="side-box">
                <attendees :io="io" />
                        <hr>
                <queue :io="io" :queue="settings.queue" />
            </div>

            <div>
                <search class="search col-md-12" :searchResults="searchQueue" :io="io" />
            </div>
            
            <div class="video col-md-12">
                <videoComp class="video-comp" :queue="roomQueue" :io="io"/>
            </div>
        </div>
    </div>

</template>

<script>

import config from '../config';

import axios from 'axios'
import io from 'socket.io/client-dist/socket.io'

import videoComp from "@/components/video";
import search from "@/components/searchResult";
import attendees from "@/components/attendees";
import queue from "@/components/queue";

export default {
    name: "room",
    components: {
        videoComp,
        search,
        attendees,
        queue
    },
    data() {
        return {
            io: null,
            searchMeta: 'itzy',
            valid: false,
            settings: {
                roomId: this.$route.params.roomId,
                roomName: '',
                queue: []
            },
            username: sessionStorage.getItem('username'),
            toggled: true
        }
    },
    methods: {
        buildRoom() {
            console.log(config.apiEndpoint+'/rooms/' + this.settings.roomId);
            axios   .get(config.apiEndpoint+'/rooms/' + this.settings.roomId)
                    .then(res => {
                        if (res.data.valid) {
                            this.valid = true
                            this.settings = res.data.settings
                            this.settings.queue = res.data.queue
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
        },
        hideBtn() {
            if (this.toggled) {
                document.getElementsByClassName('side-box')[0].style.right = '-1200px'
                setTimeout(() => {
                    document.getElementsByClassName('side-box')[0].style.display = 'none'
                }, 400);
                document.getElementsByClassName('fa-chevron-left')[0].style.transform = 'rotate(180deg)';
                this.toggled = false
            } else {
                document.getElementsByClassName('side-box')[0].style.display = 'block'
                setTimeout(() => {
                    document.getElementsByClassName('side-box')[0].style.right = '0px'
                }, 400);
                document.getElementsByClassName('fa-chevron-left')[0].style.transform = 'rotate(0deg)';
                this.toggled = true
            }
        }
    },
    created() {
        this.buildRoom()

        this.io = io(config.apiEndpoint, {
            query: {
                roomId: this.settings.roomId,
                username: this.username
            }
        })

        this.io.on(this.settings.roomId, (data) => {
            if (data.online) {
                this.io.emit(this.settings.roomId, { isOnline: { username: this.username, socketId: this.io.id } })
            }
            if (data.queueUpdate) {
                this.settings.queue = data.queueUpdate
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

    hr {
        padding: 0;
        border: 2px solid #FFD0E6;
        width: 100%;
    }

    #room {
        margin-top: 0px;
    }

    .search {
        margin-top: -50px;
        position: absolute;
        z-index: 10;
    }

    .side-box {
        padding: 0;
        transition: 0.4s;

        position: absolute;
        height: 532px;
        width: 400px;

        top: 200px;
        right: 0px;

        background-color: #FFFFFF;
        border: 2px solid #FFD0E6;

        z-index: 100;
    }

    .arrow-btn {
        transition: 0.4s;

        font-size: 45px;
        text-align: center;
        position: absolute;
        width: 72px;
        height: 73px;
        top: 130px;
        right: 0px;
        background-color: #FFFFFF;

        z-index: 100;
    }

    i {
        transition: 0.2s;
    }

    @media only screen and (max-width: 992px) {

        .side-box {
            padding: 0;
            transition: 0.4s;

            position: relative;
            height: 532px;
            width: 100vw;

            top: 70px;
            right: 0px;

            background-color: #FFFFFF;
            border: 2px solid #FFD0E6;

            z-index: 100;
        }

        .arrow-btn {
            right: 0;
            top: 129px;
            height: 70px;
            width: 70px;
        }


        .video {
            margin-top: 0px;
        }

        .search {
            margin-top: -48px;
            position: absolute;
            z-index: 10;
        }
    }

</style>