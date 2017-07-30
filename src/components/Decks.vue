<template lang="pug">
main
  h1 My Decks
  .card(v-for="item in decks", @click="getDeck(item)")
    h2 {{ item.deckId }}
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["decks"])
  },
  methods: {
    getDeck(item) {
      this.$router.push({ name: "deck", params: { deckId: item.deckId } });
    }
  }
};
</script>

<style lang="css">
</style>
