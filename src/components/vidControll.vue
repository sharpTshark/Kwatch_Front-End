<template>
    <div id="controller" class="d-flex justify-content-between">
        <button id="pause-btn" @click="togglePlay">
            <i class="fas fa-pause"></i>
        </button>
        <input @click="bar()" class="slider" name="videoBar" id="bar" type="range" min="0" :max="vidDuration" step="1" v-model="vidTime">
        <button id="sound-btn">
            <i class="fas fa-volume-up"></i>
        </button>
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
            roomId: this.$route.params.roomId
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
        }
    }
}
</script>

<style scoped>

    #controller {

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

</style>