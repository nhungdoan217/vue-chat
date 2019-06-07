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
      {{user}}
      <button v-on:click="disconnect">I Quit!!!</button>
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
    user: Object
  },
  data: function () {
    return {
        nameClone: this.userName,
        displayComponent: true
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