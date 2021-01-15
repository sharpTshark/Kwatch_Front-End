<template>
    <div class="video">
        <div class="player-wrapper">
            <div class="player">
                <div v-if="!ready">Loading...</div>
                <div v-else class="top" id="top"></div>

                <div ref="player" id="player"></div>
            </div>
        </div>

        <videoCont id="controller" :player="player" :io="io" :vidDuration="vidDuration" :vidTime="vidTime" />
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
            reConnectAttempts: 0,
            windowHeight: window.innerHeight,
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
                this.$router,
                this.roomId
            )
            
            this.ready = true

            this.vidDuration = this.player.getDuration()

            this.io.on(this.roomId, (data) => {
                handleData(data, this.player, this.io, this.roomId)
                if (data.loadVideoById) {
                    this.player.loadVideoById(data.loadVideoById)
                    setTimeout(() => {
                        this.vidDuration = this.player.getDuration()
                    }, 1000);
                }
            })
        },
        onStateChange(e) {

        },
        async init() {
            var tag = document.createElement('script')
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            await wait();

            this.player = new YT.Player('player', {
                width: '100%',
                height: window.innerHeight-200,
                videoId: this.roomVideo,
                events: {
                    'onReady': this.onReady,
                    'onStateChange': this.onStateChange
                },
                playerVars: { 'autoplay': 1, 'showinfo': 0,  'controls': 0, 'rel': 0 },
            });
        },
        barProgress() {
            setInterval(() => {
                this.vidTime = this.player.getCurrentTime()
            }, 1000);
        }
    },
    created() {
        this.io.on(this.roomId, (data) => {
            if (data.roomInfo) {
                if (data.roomInfo.video.paused) this.paused = true
                else this.paused = false
                
                this.roomVideo = data.roomInfo.video.id
            }
        })
    },
    mounted() {
        this.init()
    }
}

</script>

<style scoped>

    .player {
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