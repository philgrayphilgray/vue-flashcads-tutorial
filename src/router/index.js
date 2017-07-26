import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Deck from '@/components/Deck'
import Decks from '@/components/Decks'
import DeckControls from '@/components/DeckControls'
import CardEdit from '@/components/CardEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/decks',
      name: 'decks',
      components: {
        default: Decks
      }
    },
    {
      path: '/:deckId',
      name: 'deck',
      components: {
        default: Deck,
        a: DeckControls
      },
            props: {default: true, a:true}
    },
    {
      path: '/:deckId/:id/edit',
      name: 'edit',
      components: {
        default: CardEdit,
        a: DeckControls
      },
      props: {default: true, a:true}
    }
  ]
})
