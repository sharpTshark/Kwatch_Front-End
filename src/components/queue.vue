<template>
    <div id="queue">
        <h1>Queue</h1>
        <ul>
            <li class="d-flex justify-content-between" v-for="video in queue">
                <div class="d-flex"  @click="playThisVid(video)">
                    <img class="" :src="video.thumbnail.url" alt="video">
                    <h5>{{video.title}}</h5>
                </div>
                <button @click="delItem(video.id)"><i class="fas fa-times-circle"></i></button>
            </li>
        </ul>
    </div>
</template>

<script>

import config from '../config'

import axios from 'axios'

export default {
    name: 'queue',
    props: ['io', 'queue'],
    data() {
        return {
            roomId: this.$route.params.roomId
        }
    },
    methods: {
        playThisVid(video) {
            this.io.emit(this.roomId, { loadVid: video.id })
        },
        delItem(id) {
            this.io.emit(this.roomId, { delQueueItem: id })
        }
    },
    mounted() {

    }
}

</script>

<style scoped>

    #queue {
        padding: 0px 20px;
    }

    h1 {
        padding: 10px 10px;
        font-weight: 1;
        color: #4A4A4A;
    }

    ul {
        list-style: none;
        padding: 0px 10px;
        max-height: 230px;
        overflow-y: scroll;
    }

    li {
        cursor: pointer;
        text-align: center;

        text-align: center;

        border: 3px solid #FFD0E6;
        border-radius: 4px;
        background-color: #FEEFF4;

        margin: 10px 0px;
        max-height: 58px;

        overflow: hidden;
    }

    li:hover img {
        transform: scale(1.1);
    }

    img {
        transition: 0.4s;
        width: 80px;
        height: 45px;

        margin: 3px;
    }

    h5 {
        color: #4A4A4A;
        padding: 10px;
        font-size: 13px;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        transition: 1s;
        background: #FFD0E6; 
        border-radius: 10px;
    }

    button {
        background-color: transparent;
        padding: 0 10px;
        border: none;

        pointer-events: all;
    }
    button i {
        font-size: 20px;
        color: #ffbcdb;
    }

</style>