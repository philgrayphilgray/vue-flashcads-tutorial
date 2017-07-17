<template>
<div class="home">
  {{ msg }}
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
     ...mapGetters({})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
