<template>
    <div class="chat-service">
        <b-badge>{{headerMsg}}</b-badge>
    </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    headerMsg: String
  },
    methods: {
            add() {
          		// Emit the server side
          		this.$socket.emit("add", { a: 5, b: 3 });
            },
 
            get() {
          		this.$socket.emit("get", { id: 12 }, (response) => {
                    console.log();
                });
            }
        },
    sockets: {
        connect: function() {
                console.log('Connected')
            }
        }    
}
</script>


<style scoped>
.chat-service {
  color: red;
}
</style>