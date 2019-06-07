<template>
  <div class="chat-service">
    <b-badge>{{headerMsg}}</b-badge>
    <button v-on:click="add">TEST connect</button>
  </div>
</template>

<script>
export default {
    name: 'Chat',
    props: {
        headerMsg: String,
    },
    methods: {
        disconnect: function() {
            this.logs = []
        },
        add() {
            console.log('213')
            // Emit the server side
            this.$socket.emit('addEvent', { a: 5, b: 3 }, response => {
                console.log(response, 'hsadhausad')
            })
        },

        get() {
            this.$socket.emit('get', { id: 12 }, response => {
                console.log(response)
            })
        },
        namct() {
            console.log('namct event emit')

            this.methods.add()
        },
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