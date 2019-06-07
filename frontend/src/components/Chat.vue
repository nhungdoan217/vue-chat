<template>
  <div class="chat-service">
    <button v-on:click="addUser" v-if="!isUserExists">Test connect</button>
    <div v-if="isUserExists">
        <button v-on:click="disconnect">Disconnect</button>
    </div>
    
  </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'Chat',
    props: {
        userName: String,
        isUserExists: Boolean,
        addUser: Function,
        disconnect: Function,
        onlineUserIds: Array,
        room: Object,
        user: Object
    }
}
</script>


<style scoped>
.chat-service {
    color: red;
}
</style>