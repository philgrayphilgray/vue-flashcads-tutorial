import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Deck from '@/components/Deck'
import Decks from '@/components/Decks'
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
      component: Decks
    },
    {
      path: '/:deckId',
      name: 'deck',
      props: true,
      component: Deck
    },
    {
      path: '/:deckId/:id/edit',
      name: 'edit',
      props: true,
      component: CardEdit
    }
  ]
})
