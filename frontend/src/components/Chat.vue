<template>
  <div class="chat-service">
    <b-badge>{{headerMsg}}</b-badge>
    <button v-on:click="addUser" v-if="!isUserExists">Test connect</button>
    <div v-if="isUserExists">
        <button v-on:click="disconnect">Disconnect</button>
    </div>
    <div v-if="room.default">
        <div v-for="onlineUserId in onlineUserIds">
            {{user[onlineUserId]}}
            {{user}}
        </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'Chat',
    props: {
        headerMsg: String,
    },
    data() {
        return {
            user: {},
            room: {},
            onlineUserIds: []
        }
    },
    methods: {
        disconnect: function() {
            this.logs = []
        },
        getSocket() {
            return this.$socket;
        },
        addUser() {
            this.getSocket().emit('joinRoom', {name: 'Nhung', id: this.$socket.id}, response => {
                this.room = response.room;
                this.user[response.user.id] = response.user;
                this.onlineUserIds = response.room.default.onlineUserIds
            })
        },
        getUser() {
            this.getSocket().on('joinRoomResp', (res) => {
                console.log(res)
            })
        },
        get() {
            this.$socket.emit('get', { id: 12 }, response => {
                console.log(response)
            })
        },
        disconnect() {
            this.$socket.emit('disconnect', () => {
                this.user = {};
                this.room = {};
                this.onlineUserIds = {};
            })
        }
    },
    computed: {
        isUserExists: function() {
            if (!_.isEmpty(this.user) && !_.isEmpty(this.room)) {
                return this.room.default.onlineUserIds.includes(this.user.id);
            }
            return false;
        }
    },
    sockets: {
        connect: function() {
            console.log('Connected')
        },
    },
}
</script>


<style scoped>
.chat-service {
    color: red;
}
</style>