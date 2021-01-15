<template>
    <div>
        <div class="video-input d-flex">
            <div class="search-input">
                <input v-model="searchMeta" v-on:keyup="search" type="text" name="videoInput" id="videoInput" placeholder="Search on Youtube">
                <button class="searchBtn" @click="search"><i class="fas fa-search"></i></button>
            </div>
            <button v-if="!searchQueueEmpt" class="searchBtn" @click="removeList()">
                <i class="fas fa-times-circle"></i>
            </button>
        </div>
        <ul id="aUl" class="d-flex justify-content-center flex-wrap">
            <li class="one-item" v-for="item in searchQueue" :key="item">
                <div class="item-wrapper">
                    <div class="image">
                        <div class="image-back d-flex justify-content-around">
                            <div class="vid-action-btn" :key="item" @click="addFav(item)">
                                <i class="fas fa-bookmark"></i>
                            </div>
                            <div class="vid-action-btn" :key="item" @click="playVideo(item), removeList()">
                                <i class="fas fa-play"></i>
                            </div>
                            <div class="vid-action-btn" :key="item" @click="addQueue(item)">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                        <img    :src="item.snippet.thumbnails.medium.url" 
                                alt="tumbnail"
                                width="200" 
                                height="120">
                    </div>
                    <h3>{{item.snippet.title}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'searchResult',
    props: ['io'],
    data() {
        return {
            roomId: this.$route.params.roomId,
            searchMeta: 'itzy',
            searchQueue: [],
            searchQueueEmpt: true
        }
    },
    methods: {
        search(e) {
            if (e.key == 'Enter' || e.type == 'click') {
                document.getElementById('aUl').style.overflowY = 'scroll'
                this.searchQueueEmpt = false
                axios   .post('http://192.168.1.29:3000/findvideo', { search: this.searchMeta })
                    .then(res => {
                        this.searchQueue = res.data
                        console.log(res.data);
                    })
                    .catch(err => console.log(err))
            }
        },

        addQueue(item) {
            // post to localhost:3000/addToQueue with new video info
            // it wil be logged in the console of the server

            axios   .post('http://192.168.1.29:3000/addToQueue', {
                        roomId: this.roomId,
                        video: {
                            title: item.snippet.title,
                            id: item.id.videoId,
                            thumbnail: item.snippet.thumbnails.medium
                        }
            })

                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => console.log(err))
        },
        playVideo(item) {
            this.io.emit(this.roomId, { loadVid: item.id.videoId })
            document.getElementById('aUl').style.overflowY = 'hidden'
        },
        addFav(item) {
            console.log(item.id.videoId);
            console.log(item.snippet.thumbnails.medium);
            console.log(item.snippet.title);
        },

        removeList() {
            document.getElementById('aUl').style.overflowY = 'hidden'
            this.searchQueueEmpt = true
            this.searchQueue = []
        }
    },
    mounted() {
        let list = document.getElementById('aUl')
        list.style.maxHeight = window.innerHeight-200+'px'
    },
    created() {

    }
}
</script>

<style scoped>

    * {
        padding: 0;
    }

    .video-input {
        padding-bottom: 21px;
    }

    .video-input input {
        background-color: #FFFFFF61;
        border: 2px solid #E04386;
        border-radius: 3px;

        font-weight: 100;
    }

    .searchBtn {
        width: 50px;
        background: none;
        border: none;
    }

    .exit {
        text-align: center;
        width: 50px;
        padding-top: 2px;
    }

    #aUl {
        padding-right: 10%;
        list-style-type: none;
        z-index: 10;
        position: absolute;
        width: 50%;

        direction: rtl;
        background: transparent linear-gradient(90deg, #000000 0%, #000000AB 90%, #00000000 100%) 0% 0% no-repeat padding-box;
        
    }

    .one-item {
        padding: 10px;
    }

    .item-wrapper {
        z-index: 1;
        text-align: center;
    }

    h3 {
        font-size: 15px;
        color: white;

        direction: ltr;


        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 200px;
    }

    .image {
        position: relative;
    }

    .image-back {
        padding-top: 20%;
        color: white;

        transition: 0.4s;

        position: absolute;
        z-index: 10;

        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        opacity: 0;

        background: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.46262254901960786) 100%, rgba(0,0,0,0) 100%);
    }

    .image-back:hover {
        opacity: 1;
    }

    .vid-action-btn {
        color: #E04386;
        background-color: #FEEFF424;

        padding: 13px;

        height: 50px;
        width: 50px;

        border-radius: 50%;

        transition: 0.4s;
    }

    .vid-action-btn:hover {
        background-color: #feeff460;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        transition: 1s;
        background: #FEEFF4; 
        border-radius: 10px;
    }

</style>