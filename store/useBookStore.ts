import { defineStore } from "pinia";

export type Book = {
  title: string;
  body: string;
};

export const useBookStore = defineStore("useBookStore", () => {
  let newBook = reactive<Book>({
    title: "",
    body: "",
  });

  const books: Array<Book> = reactive<Array<Book>>([]);

  const addBook = () => {
    books.push({
      title: newBook.title,
      body: newBook.body,
    });
    console.log(`new book was added : ${books}`);

    newBook = {
      title: "",
      body: "",
    };
  };

  const deleteBook = (index: number) => {
    books.splice(index, 1);
    console.log("削除が完了しました");
  };

  return { newBook, addBook, deleteBook, books };
});
