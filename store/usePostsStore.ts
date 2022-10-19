import { defineStore } from "pinia";
import { onServerPrefetch } from "vue";
import axios from "axios";

export const usePostsStore = defineStore("usePostsStore", () => {
  const data = "this is from pinia";

  // all posts
  const posts = reactive[[]];
  axios
    .get("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((res) => posts.push(...res.data));

  onMounted(() => {
    console.log(posts);
  });

  return { data, posts };
});
