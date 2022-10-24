import { defineStore } from 'pinia';

export const mainStore = defineStore({
  id: 'main',
  state: () => ({
    books: []
  }),

  getters: {
    getBooks: (state) => state.books,
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
