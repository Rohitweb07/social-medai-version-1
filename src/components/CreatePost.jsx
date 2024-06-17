import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const reactionRef = useRef();
  const tagsRef = useRef();

  const postSubmitclick = (event) => {
    event.preventDefault();
    let userId = userIdRef.current.value;
    let title = titleRef.current.value;
    let body = bodyRef.current.value;
    let reaction = reactionRef.current.value;
    let tags = tagsRef.current.value.split(/(\s+)/);
    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    reactionRef.current.value = "";
    tagsRef.current.value = "";
    addPost(userId, title, body, reaction, tags);
  };

  return (
    <>
      <form className="createPost" onSubmit={postSubmitclick}>
        <div className="form-group mb-3">
          <label htmlFor="userId">USERID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdRef}
            placeholder="Enter userId"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="title">POST TITLE</label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
            placeholder="How's your feeling today!"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="body">POST CONTENT</label>
          <textarea
            className="form-control"
            id="body"
            ref={bodyRef}
            rows="3"
            placeholder="Tell us more about this"
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="reaction">PEOPLE REACTION</label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            ref={reactionRef}
            placeholder="Number of Reaction people do"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="tags">TAGS</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsRef}
            placeholder="please enter tag with space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
