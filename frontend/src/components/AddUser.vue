<template>
<div>
    <div v-if="displayComponent">
        <br>
        <p>To join the chat submit your username</p>
        <input type="text" v-model="nameClone" placeholder="Add username">
        <br>
        <div v-if="nameClone">
            <b-button v-on:click="handleOnClick(nameClone)">Submit</b-button>
        </div>
    </div>
    <div v-else>
      <div v-for="message in messages">
        <div v-if="message.id !== 'default'">
          <span>{{message.name}}: </span>
          <span v-for="displayMessage in message.message">
            <span>{{displayMessage.message}}</span>
          </span>
        </div>
      </div>
      <input type="text" v-model="message" placeholder="Add Message">
      <button v-on:click="sendMessage(message)">Send Message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  props: {
    userName: String,
    getUserName: Function,
    isUserExists: Boolean,
    addUser: Function,
    disconnect: Function,
    onlineUserIds: Array,
    room: Object,
    user: Object,
    sendMessage: Function,
    messages: Array
  },
  data: function () {
    return {
        nameClone: this.userName,
        displayComponent: true,
        message: ""
    }
  },
  methods: {
    handleOnClick() {
      this.getUserName(this.nameClone);
      this.addUser();
      this.displayComponent = false;
    }
  }
}
</script>