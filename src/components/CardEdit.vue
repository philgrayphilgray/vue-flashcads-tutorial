<template lang="pug">
div
  main
    span.fa.fa-arrow-left(@click="goBack")  Back to Deck
    h2 Card edit
    textarea(v-model="current.question", rows="4")
    textarea(v-model="current.answer", rows="4")
  footer
    .btn(@click="save()") Save
    .btn(@click="removeCard()") Delete
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      current: []
    };
  },
  props: ["id"],
  computed: {
    ...mapGetters(["currentDeck", "currentCard"]),
    getCurrentCard() {
      return this.currentDeck.filter(item => item.id === this.id);
    }
  },
  beforeMount() {
    [this.current.question, this.current.answer, this.current.id] = [
      this.getCurrentCard[0].question,
      this.getCurrentCard[0].answer,
      this.id
    ];
  },
  methods: {
    ...mapActions(["saveCard", "deleteCard"]),

    getTimeStamp() {
      const now = new Date();
      return now.toJSON();
    },
    goBack() {
      this.$router.go(-1);
    },
    save() {
      const updates = {
        question: this.current.question,
        answer: this.current.answer,
        id: this.current.id,
        mod: this.getTimeStamp()
      };
      this.saveCard(updates);
      this.goBack();
    },
    removeCard() {
      const card = {
        id: this.current.id
      };
      this.deleteCard(card);
      this.goBack();
    }
  }
};
</script>

<style lang="scss">
</style>
