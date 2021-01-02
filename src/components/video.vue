<template>
    <div>
        <div class="video">

            <div v-if="!ready">Loading...</div>
            <div v-else class="top"></div>

            <div ref="player" id="player"></div>
        </div>
        
        <button @click="togglePlay">Pause/Play</button>
        <input type="range" name="videoBar" id="videoBar">
    </div>
</template>

<script>

export default {
    name: 'video',
    props: ['queue', 'io'],
    data() {
        return {
            reConnectAttempts: 0,
            roomVideo: '89ppVWIint8',
            player: null,
            ready: false,
            vidReady: false,
            vidPaused: true,
        }
    },
    methods: {
        onReady(e) {
            this.ready = true;
            console.log(this.player.getPlayerState());

            // check if iframe is ready to play else timed out on 300e attempt
            setInterval(() => {
                if (!this.vidReady) {
                    if (this.player.getPlayerState() == 1 || this.player.getPlayerState() == -1) {
                        
                        if (this.vidPaused) this.player.pauseVideo()
                        else this.player.playVideo()

                        console.log(this.vidPaused);

                        this.vidReady = true
                        this.io.emit('testroom', { vidReady: this.vidReady });
                    } else {
                        this.vidReady = false
                        this.reConnectAttempts++

                        console.log('reconnecting... '+this.reConnectAttempts+'e attempt');
                        if (this.reConnectAttempts == 300) {
                            this.vidReady = true
                            this.$router.push('/room/roomAction=join/error=room%20timed%20out/join=none')
                        }
                    }
                }
            }, 70);
        },
        togglePlay() {
            this.io.emit('testroom', { onStateChange: this.player.getPlayerState() });
        },
        async init() {
            this.player = null;
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
                playerVars: { 'autoplay': 1, 'controls': 0 },
            });
        }
    },
    created() {
        this.io.on('testroom', (data) => {
            if (data.roomInfo) {
                this.vidPaused = data.roomInfo.video.paused
                this.roomVideo = data.roomInfo.video.id
            }
            if (data.videoData) {
                this.player.loadVideoById(data.videoData.videoId)
            }
            if (data.loadVideoById) {
                this.player.loadVideoById(data.loadVideoById)
            }
            if (data.playVideo) {
                this.player.playVideo()
            }
            if (data.pauseVideo) {
                this.player.pauseVideo()
            }
            if (data.seekTo) {
                console.log(data);
                this.player.seekTo(data.seekTo, true)
            }
            if (data.sendVidTime) {
                console.log(data);
                this.io.emit('testroom', { 
                    seek: {
                        time: this.player.getCurrentTime(),
                        socketId: data.sendVidTime 
                    }
                })
            }
    })

    setInterval(() => {
        if (this.player.getPlayerState() == 3) {
            this.onReady
        }
        
    }, 1000);


    },
    mounted() {
        this.init();
    }
}

const wait = async (duration) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}


</script>

<style scoped>

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