<template lang="pug">
main
  h2 Home
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      msg: 'test'
    }
  },
  computed: {
     ...mapGetters([
       'getCards'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
