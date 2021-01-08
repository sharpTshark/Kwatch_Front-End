<template>
    <div id="controller">
        <button @click="togglePlay">Pause/Play</button>
        <input @click="bar()" name="videoBar" id="bar" type="range" min="0" :max="vidDuration" step="1" v-model="vidTime">
    </div>

</template>

<script>
export default {
    name: 'vidControll',
    props: ['player', 'io', 'vidDuration', 'vidTime'],
    data() {
        return {

        }
    },
    methods: {
        // handle pause and play input btn
        togglePlay() {
            this.io.emit('testroom', { onStateChange: this.player.getPlayerState() });
        },
        // handle video progress bar
        bar() {
            this.io.emit('testroom', { onBarChange: this.vidTime });
        }
    }
}
</script>

<style scoped>

    #controller {
        background-color: rgb(71, 71, 71);
        padding: 20px;
    }

    #bar {
        width: 80%;
    }

</style>