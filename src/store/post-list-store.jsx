import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addIntialPost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "ADD_INITIAL_POSTS") {
    newPostList = [...action.payload.posts, ...currentPostList];
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    console.log(userId, title, body, reactions, tags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const addIntialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

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
      <PostList.Provider
        value={{ postList, addPost, deletePost, addIntialPost }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;
