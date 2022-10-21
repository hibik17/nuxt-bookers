import { defineStore } from "pinia";

export type Book = {
  title: string;
  body: string;
};

export const useBookStore = defineStore("useBookStore", () => {
  const newBook = reactive<Book>({
    title: "",
    body: "",
  });

  const books: Array<Book> = reactive<Array<Book>>([]);

  const addBook = () => {
    books.push();
    console.log("新規投稿が完了");
  };

  const deleteBook = (index: number) => {
    books.splice(index, 1);
    console.log("削除が完了しました");
  };

  return { newBook, addBook, deleteBook };
});
