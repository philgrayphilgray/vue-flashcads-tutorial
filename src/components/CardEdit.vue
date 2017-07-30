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
      current: {}
    };
  },
  props: ["id", "deckId"],
  computed: {
    ...mapGetters(["currentDeck"]),
    getCurrentCard() {
      const currentCard = this.currentDeck.filter(item => item.id === this.id);
      const newCard = {
        question: "",
        answer: "",
        mod: ""
      };
      return currentCard ? currentCard : newCard;
    }
  },
  created() {
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
      this.$router.push({ name: "deck" });
    },
    save() {
      const updates = {
        question: this.current.question,
        answer: this.current.answer,
        id: this.id,
        deckId: this.deckId,
        mod: this.getTimeStamp()
      };
      console.log(updates);
      this.saveCard(updates);
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
