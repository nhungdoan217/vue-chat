<template>
    <div>
        <br>
        <p>To join the chat submit your username</p>
        <input type="text" v-model="nameClone" placeholder="Add username">
        <br>
        <div v-if="nameClone">
            <b-button v-on:click="getUserName(nameClone)">Submit</b-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddUser',
  props: {
    userName: String,
    getUserName: Function
  },
  data: function () {
    return {
        nameClone: this.userName
    }
  }
}
</script>