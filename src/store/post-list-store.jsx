import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else {
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    console.log(`${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <>
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    </>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Noida",
    body: "Hii!! friend, i am going to Noida to explore my future this jounery start for a getting a job",
    reaction: 2,
    userId: "99",
    tags: ["vaction", "Job", "softwereEngineering"],
  },

  {
    id: "2",
    title: "Visiting Lotus Temple",
    body: "Hii!! friend, i am on Lotus temple this place is so much beautifull and awasome and clean enjoying my self ",
    reaction: 16,
    userId: "100",
    tags: ["vaction", "Toursim", "Beautifullgirl", "enjoying"],
  },
];

export default PostListProvider;
