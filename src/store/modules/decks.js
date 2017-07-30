import decks from "../../data/decks";
import { uniqBy } from "lodash";

const state = {
  decks: []
};
const mutations = {
  SET_DECKS(state, decks) {
    state.decks = decks;
  },
  SAVE_CARD(state, { question, answer, id, mod }) {
    const record = state.decks.find(el => el.id === id);
    if (record) {
      record.question = question;
      record.answer = answer;
      record.mod = mod;
    } else {
      state.decks.push({
        question,
        answer,
        id,
        deckId,
        mod
      });
    }
    console.log(state.decks);
  },
  DELETE_CARD(state, { id }) {
    const index = state.decks.findIndex(el => el.id === id);
    if (index) {
      state.decks.splice(index, 1);
    }
  }
};
const getters = {
  decks: state => {
    return _.uniqBy(state.decks, "deckId");
  },
  currentDeck: state => {
    return state.decks;
  }
};
const actions = {
  initDecks: ({ commit }) => {
    commit("SET_DECKS", decks);
  },
  saveCard: ({ commit }, updates) => {
    commit("SAVE_CARD", updates);
  },
  deleteCard: ({ commit }, card) => {
    commit("DELETE_CARD", card);
  }
};
export default {
  state,
  mutations,
  getters,
  actions
};
