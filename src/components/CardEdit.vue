<template lang="pug">
main
  span.fa.fa-arrow-left(@click="goBack")  Back to Deck
  h2 Card edit
  textarea(v-model="current.question", rows="4", @keyup.enter="save()")
  textarea(v-model="current.answer", rows="4", @keyup.enter="save()")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      current: []
    }
  },
  props: ['id'],
  computed: {
    ...mapGetters([
      'currentDeck',
      'currentCard'
    ]),
    getCurrentCard(){
      return (this.currentDeck.filter( item =>  item.id === this.id))
    }
  },
   beforeMount(){
    [this.current.question, this.current.answer, this.current.id] = [this.getCurrentCard[0].question, this.getCurrentCard[0].answer, this.id];
  },
  methods: {
    ...mapActions([
      'saveCard'
    ]),
      
    getTimeStamp() {
  const now = new Date();
  return now.toJSON();
},
    goBack(){
      this.$router.go(-1)
    },
    save(){
      const updates = {
        question: this.current.question,
        answer: this.current.answer,
        id: this.current.id,
        mod: this.getTimeStamp()
      }
      this.saveCard(updates)
    }
  }
}
</script>

<style lang="scss">
</style>
