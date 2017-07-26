<template lang="pug">
footer
  template(v-if='!id')
    .btn Play
    .btn Reset Scores  
  template(v-if='id')
    .btn Save
    .btn Delete
</template>

<script>
export default {
  props:["id", "deckId"]
}
</script>

<style lang="css">
</style>
