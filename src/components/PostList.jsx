import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addIntialPost } = useContext(PostListData);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addIntialPost(data.posts);
      });
  }, []);

  return (
    <>
      {postList && postList.length === 0 && <WelcomeMessage />}
      {postList &&
        postList.length > 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
