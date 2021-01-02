<template>
<div>
    <ul>
        <div class="video-input">
            <input v-model="searchMeta" type="text" name="videoInput" id="videoInput">
            <button @click="search">search</button>
        </div>
        <li v-for="item in searchQueue" :key="item">
            {{item.snippet.title}} <button :key="item" @click="playVideo(item)">play</button>
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
            searchMeta: 'itzy',
            searchQueue: []
        }
    },
    methods: {
        playVideo(item) {
            this.io.emit('testroom', { loadVid: item.id.videoId })
        },
        search() {
            axios   .post('http://192.168.1.29:3000/findvideo', { search: this.searchMeta })
                    .then(res => {
                        res.data.forEach(item => {
                            this.searchQueue.push(item)
                        });
                    })
                    .catch(err => console.log(err))
        }
    },
    created() {
        
    }
}
</script>

<style scoped>

</style>