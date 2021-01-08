<template>
    <div>
        <div class="video">
            <div v-if="!ready">Loading...</div>
            <div v-else class="top"></div>

            <div ref="player" id="player"></div>
        </div>

        <videoCont id="controller" :player="player" :io="io" :vidDuration="vidDuration" :vidTime="vidTime"></videoCont>
    </div>
</template>

<script>

import videoCont from "@/components/vidControll";

import wait from "@/functions/await";
import vidReady from "@/functions/vidReady";
import handleData from "@/functions/handleData";

export default {
    name: 'video',
    props: ['queue', 'io'],
    components: {
        videoCont
    },
    data() {
        return {
            roomId: this.$route.params.roomId,
            roomVideo: '89ppVWIint8',
            player: null,
            paused: true, 
            ready: false,
            vidTime: 0,
            vidDuration: 0,
            roomInfo: false,
            reConnectAttempts: 0
        }
    },
    methods: {
        onReady(e) {
            this.barProgress()

            vidReady(   
                this.ready, 
                this.player,
                this.paused, 
                this.reConnectAttempts, 
                this.io, 
                this.$router
            )
            
            this.ready = true

            this.vidDuration = this.player.getDuration()

            this.io.on('testroom', (data) => {
                handleData(data, this.player, this.vidDuration, this.io)
            })
        },
        async init() {
            var tag = document.createElement('script')
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            await wait();

            this.player = new YT.Player('player', {
                height: '500',
                width: '100%',
                videoId: this.roomVideo,
                events: {
                    'onReady': this.onReady,
                },
                playerVars: { 'autoplay': 1, 'showinfo': 0,  'controls': 0 },
            });
        },
        barProgress() {
            setInterval(() => {
                this.vidTime = this.player.getCurrentTime()
            }, 1000);
        }
    },
    mounted() {
        this.init()
    },
    created() {
        this.io.on('testroom', (data) => {
            if (data.roomInfo) {
                if (data.roomInfo.video.paused) this.paused = true
                else this.paused = false
                
                this.roomVideo = data.roomInfo.video.id
            }
        })
    }
}

</script>

<style scoped>

    #controller {
        width: 100%;
        position: fixed;
        bottom: 0px;
    }

    #bar {
        width: 80%;
    }

    .video {
        position: relative;
    }

    .top {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

    }

</style>