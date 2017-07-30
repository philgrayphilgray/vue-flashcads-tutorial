<template lang="pug">
  .card(@click="editCard(card)")
    span.score(v-if="card.mod") {{ calculateScore(card) }}%
    h3.card-title(:class="{'fa fa-plus': card.mod === ''}") {{ card.question }}
</template>

<script>
export default {
  props: ["card"],
  methods: {
    calculateScore(card) {
      return Number.parseInt(card.correct / card.attempts * 100) || 0;
    },
    editCard(card) {
      this.$router.push({ name: "edit", params: { id: card.id } });
    }
  }
};
</script>

<style lang="scss">
</style>
