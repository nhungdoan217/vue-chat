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
  }
}
</script>


<style scoped>
.chat-service {
  color: red;
}
</style>