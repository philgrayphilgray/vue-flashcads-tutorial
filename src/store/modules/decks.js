import decks from '../../data/decks'
import { uniqBy } from 'lodash'

const state = {
  decks: []
}
const mutations = {
  'SET_DECKS' (state, decks){
    state.decks = decks
  },
  'SAVE_CARD'(state, {question, answer, id}){
    const record = state.decks.find(el => el.id === id);
     if(record){
       record.question = question;
       record.answer = answer;
     }
  }
}
const getters = {
  decks: state => {
    return _.uniqBy(state.decks, 'deck')
  },
  currentDeck: state => {
    return state.decks
  },
  currentCard(state, getters){
    return state.decks.map(deck => {
      const record = getters.decks.find(el => el.id === deck.id);
      return {
        id: deck.id,
        question: deck.question,
        answer: deck.answer,
        mod: deck.mod
      }
    })
  }
}
const actions = {
  initDecks: ({commit}) => {
    commit('SET_DECKS', decks)
  },
  saveCard: ({commit}, updates) => {
    commit('SAVE_CARD', updates)
  }

}
export default {
  state,
  mutations,
  getters,
  actions
}
