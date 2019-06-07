<template>
  <div id="app">
    <AddUser 
      :getUserName="getUserName" 
      :userName="userName" 
      :addUser="addUser" 
      :room="room" 
      :user="user" 
      :onlineUserIds="onlineUserIds" 
      :isUserExists="isUserExists"
      :disconnect="disconnect"
      :sendMessage="sendMessage"
      :messages="messages"
    />
  </div>
</template>

<script>
import Chat from './components/Chat.vue'
import AddUser from './components/AddUser.vue'

export default {
  name: 'app',
  components: {
    Chat,
    AddUser
  },
  data() {
    return {
      userName: null,
      user: {},
      room: {},
      onlineUserIds: [],
      messages: {}
    }
  },
  methods: {
    getUserName(name) {
      this.userName = name;
    },
    getSocket() {
      return this.$socket;
    },
    addUser() {
      this.getSocket().emit('joinRoom', {name: this.userName, id: this.$socket.id}, response => {
        this.room = response.room;
        this.user = response.user;
        this.onlineUserIds = response.room.default.onlineUserIds
      })
    },
    disconnect() {
      this.getSocket().emit('disconnect', {}, () => {
          this.user = {};
          this.room = {};
          this.onlineUserIds = {};
      })
    },
    sendMessage(message) {
      this.getSocket().emit('sendMessage', {message: message}, response => {
        this.messages = response
        console.log(response, this.getSocket().id);
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
