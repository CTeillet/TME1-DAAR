import Vue from 'vue'
import Vuex from 'vuex'
import {
  getLanguages,
  getBooksPerLanguage,
  getBooks,
  searchBooks,
  advancedSearch,
  searchWithTitle, searchWithId,
} from '@/service/books'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages: [],
    books: [],
  },
  mutations: {
    storeLanguages: (state, languages) => {
      state.languages = languages
    },
    storeBooks: (state, books) => {
      state.books = books
    },
  },
  actions: {
    fetchLanguages: async store => {
      const languages = await getLanguages()
      store.commit('storeLanguages', languages)
    },
    fetchBooks: async (store, lang) => {
      if (lang) store.commit('storeBooks', await getBooksPerLanguage(lang))
      else store.commit('storeBooks', await getBooks())
    },
    fetchBooksSearch: async (store, word_req) => {
      store.commit('storeBooks', await searchBooks(word_req))
    },
    fetchAdvancedSearch: async (store, expression) => {
      store.commit('storeBooks', await advancedSearch(expression))
    },
    fetchBooksByTitle: async (store, title) => {
      store.commit('storeBooks', await searchWithTitle(title))
    },
    fetchBooksById: async (store, id) => {
      store.commit('storeBooks', await searchWithId(id))
    },
  },
  modules: {},
  getters: {},
})
