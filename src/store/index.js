import { defineStore } from 'pinia';
import _ from 'lodash';    

export const mainStore = defineStore({
  id: 'main',
  state: () => ({
    books: []
  }),

  getters: {
    getBooks: (state) => {
      return _.dropRight(state.books, 90);
    }
  },

  actions: {
    setBooks(books) {
      this.books = books;
    },
    unSetBooks() {
        this.books = [];
    },
  },
  persist: true,
});
