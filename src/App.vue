<template lang="pug">
#app
  header
    router-link.brand(tag='h1', :to='{name:"decks"}') Flashcards
    .avatar
  router-view
  DeckControls

</template>
<script>
import DeckControls from './components/DeckControls.vue'
export default {
  created(){
    this.$store.dispatch('initDecks')
  },
  components: {
    DeckControls
  }
}
</script>

<style lang='scss'>
*, *:before, *:after {
  box-sizing: border-box;
}

.l-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
#app {
  position: relative;
  width: calc(750px/3);
  height: calc(1334px/3);
  margin: 0 auto;
  border: 1px solid #000;
  overflow-y: hidden;
}
header {
  position: fixed;
  width: 100%;
  background: #C4C4C4;
  padding: 0 .5em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .brand {
    flex: 1 1 auto;
    justify-self: flex-start;
    position: relative;
    bottom: 5px;
    font-size: 1em;
    cursor: pointer;
    &:before {
      position: relative;
      top: 5px;
      content: "▲";
      color: #999;
      font-size: 2em;
      display: inline-block;
      margin-right: .25em;
    }
  }
  .avatar {
    width: 2em;
    height: 2em;
    background: #999999;
    border-radius: 50%;
  }
  .fa.fa-arrow-left{
    cursor: pointer;
  }
}
main, footer {
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: .5em;

  text-align: center;
  overflow: hidden;


  div {
    position: relative;
    width: 100%;
    margin: .5em 0;
    padding: .5em;


    &.deck {
      max-height: 261px;
      margin: 0;
      padding: 0;
      overflow: scroll;
    }
     h2{
      font-size: 1em;
    }

    &.card {
      text-align: left;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
        0 3px 1px -2px rgba(0, 0, 0, .2),
        0 1px 5px 0 rgba(0, 0, 0, .12);
      &:hover{
        cursor: pointer;
      }

      .score {
        float: right;
      }
      textarea {
        width: 100%;
      }
    }
    &.card.answer-card{
      cursor: default;
    }
    &.btn {
      text-align: center;
      color: #fff;
      background: #000;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

footer {
  position: absolute;
  bottom: 0;
  height: 90px;
  padding: 0 .5em;
  background: #C4C4C4;
}
</style>
