<template>

<div class="room-attendees">
    <h1>Attendees</h1>
    <ul class="d-flex justify-content-around flex-wrap" v-if="showUsers">
        <li class="" v-for="attendee in roomAttendees" key="attendee">
            {{attendee.username}}
            <div class="attendee-actions d-flex justify-content-around">
                <i class="fas fa-user-times"></i>
                <i class="fas fa-ban"></i> 
            </div>
        </li>
    </ul>
</div>

</template>


<script>
export default {
    name: 'attendees',
    props: ['io'],
    data() {
        return {
            showUsers: true,
            roomAttendees: [],
            roomId: this.$route.params.roomId,
        }
    },
    methods: {
        showHideUsers() {
            if (this.showUsers) this.showUsers = false
            else this.showUsers = true
        }
    },
    mounted() {
        this.io.on(this.roomId, (data) => {
            if (data.roomInfo) {
                this.roomAttendees = data.roomInfo.roomAttendees
            }
            if (data.roomUpdate) {
                this.roomAttendees = data.roomUpdate
            }
        })
    }
}
</script>

<style scoped>

    .room-attendees {
        padding: 0px 20px;
    }

    h1 {
        padding: 20px 10px;
        font-weight: 1;
        color: #4A4A4A;
    }

    ul {
        list-style: none;
        padding: 0;
        max-height: 100px;
        overflow-y: scroll;
    }

    li {
        text-align: start;
        background: #FEEFF4;

        border: 2px solid #FEEFF4;

        width: 120px;
        text-align: center;
        border-radius: 4px;
        margin: 10px 0px;


    }

    li i {
        padding: 5px;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        transition: 1s;
        background: #FFD0E6; 
        border-radius: 10px;
    }

</style>