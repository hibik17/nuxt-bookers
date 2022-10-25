import { defineStore } from "pinia";
import axios from "axios";

type PostType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const usePostsStore = defineStore("usePostsStore", () => {
  // all posts
  const posts = reactive<Array<PostType>>([]);

  onMounted(() => {
    axios
      .get<Array<PostType>>(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      )
      .then((res) => {
        posts.push(...res.data);
        console.log(res.data);
      });
  });

  return { posts };
});
