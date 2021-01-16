<template>
    <div id="controller" class="d-flex justify-content-between">
        <button id="pause-btn" @click="togglePlay">
            <i class="fas fa-pause"></i>
        </button>

        <input @click="bar" class="slider" name="videoBar" id="bar" type="range" min="0" :max="vidDuration" step="1" v-model="vidTime">
        
        <button id="sound-btn" @click="sound">
            <i class="fas fa-volume-up"></i>
        </button>

        <div v-if="soundShow" class="sound-wrapper">
            <input @click="setVolume" class="sound" type="range" name="volume" id="volume" min="0" max="100" v-model="volume">
        </div>
    </div>

</template>

<script>
export default {
    name: 'vidControll',
    props: ['player', 'io', 'vidDuration', 'vidTime'],
    data() {
        return {
            primColor: sessionStorage.getItem('prim'),
            secColor: sessionStorage.getItem('sec'),
            roomId: this.$route.params.roomId,
            soundShow: false,
            volume: 100
        }
    },
    methods: {
        // handle pause and play input btn
        togglePlay() {
            this.io.emit(this.roomId, { onStateChange: this.player.getPlayerState() });
            if (this.player.getPlayerState() == 1) {
                document.getElementById('pause-btn').innerHTML = '<i class="fas fa-play"></i>'
            }
            if (this.player.getPlayerState() == 2) {
                document.getElementById('pause-btn').innerHTML = '<i class="fas fa-pause"></i>'
            }
        },
        // handle video progress bar
        bar() {
            this.io.emit(this.roomId, { onBarChange: this.vidTime });
        },
        sound() {
            if (this.soundShow) this.soundShow = false
            else this.soundShow = true
        },
        setVolume() {
            this.player.setVolume(this.volume)
        }
    }
}
</script>

<style scoped>

    #controller {
        position: relative;

        margin-top: -6px;
        background-color: #FFD0E6;
        padding: 10px 2%;
    }

    button {
        font-size: 25px;
        color: #e04387;
        background: none;
        border: none;
    }

    .slider {
        width: 92%;
        -webkit-appearance: none;
        height: 12px;
        margin: 12px 0px;
        background: #4A4A4A;
        outline: none;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider:hover {
        opacity: 1;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 12px;
        background: #e04387;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .sound-wrapper {
        padding: 5px 15px;
        padding-top: 8px;
        background-color: #FFD0E6;

        bottom: 59px;
        right: 30px;
        position: absolute;

        border-radius: 8px 8px 0px 0px;
        border-bottom: 3px solid #e04387;
    }

</style>