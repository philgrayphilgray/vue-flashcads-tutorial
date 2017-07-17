import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  deck: [
    {
      question: "How many planets are there in the solar system?",
      answer: "8 or 9",
      attempts: 0,
      correct: 0,
      mod: "2017-07-16T19:28:59.587Z"
    },
    {
      question: "How many countries are there in the world?",
      answer: "196",
      attempts: 0,
      correct: 0,
      mod: "2017-07-16T19:29:29.586Z"
    },
    {
      question: "",
      answer: "",
      attempts: 0,
      correct: 0,
      mod: ""
    }
  ]
},
getters: {

},
mutations: {

}
})
