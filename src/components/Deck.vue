<template lang="pug">
div
  main
    span.fa.fa-arrow-left(@click="goBack")  Back to Decks
    .deck
      h2 {{ filteredDecks[0].deck }}
      Card(v-for='card in filteredDecks', :card='card')
      .card
        h3.card-title.fa.fa-plus  Add New Card
  footer
    .btn() Play
    .btn() Reset Scores
</template>

<script>
import Card from "./Card.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Card
  },
  props: ["deckId"],
  computed: {
    ...mapGetters(["currentDeck"]),
    filteredDecks() {
      return this.currentDeck.filter(item => item.deckId === this.deckId);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
</style>
