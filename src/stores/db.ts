import type { Book } from '@/types/Book';
import { openDB } from 'idb';

const dbPromise = openDB('my-db', 1, {
  upgrade(db) {
    db.createObjectStore('books');
  },
});

async function get(key: any): Promise<Book>  {
  return (await dbPromise).get('books', key);
}

async function set(key: any, val: any) {
  return (await dbPromise).put('books', val, key);
}

async function del(key: any) {
  return (await dbPromise).delete('books', key);
}

async function clear() {
  return (await dbPromise).clear('books');
}

async function keys() {
  return (await dbPromise).getAllKeys('books');
}

async function getAll(): Promise<Book[]> {
  return (await dbPromise).getAll('books');
}

export { get , set, del, clear, keys, getAll}