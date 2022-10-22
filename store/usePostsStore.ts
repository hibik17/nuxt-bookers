import { defineStore } from "pinia";
import axios from "axios";

export const usePostsStore = defineStore("usePostsStore", () => {
  const data = "this is from pinia";

  // all posts
  const posts = reactive([]);
  onMounted(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => {
        posts.push(...res.data);
        console.log(res.data);
      });
  });

  return { data, posts };
});
