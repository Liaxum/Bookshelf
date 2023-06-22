import { defineStore } from 'pinia';

// @ts-ignore
import { Book } from '../types/book';
import { keys, getAll, set } from './db';

export const useBookStore = defineStore('book', {
  state: () => ({ books: [] as Book[] }),
  getters: {
    getAll(): Book[] {
      return this.books;
    }
  },
  actions: {
    async POPULATE_FROM_CACHE() {
      let [keyss, values] = await Promise.all([keys(), getAll()])
      this.books = keyss.map((key, index) => ({ id: key, name: values[index] }))
    },

    addBook(book: Book) {
      if (!this.books.find((b) => b.id === book.id)) {
        set(book.id, { ...book });
        this.books.push(book);
      }
    },
    updateBook(book: Book) {
      let index = this.books.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        this.books[index] = book;
        set(book.id, { ...book });
      }
    }
  }
});