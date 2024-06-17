import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletepostbtn"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <AiFillDelete />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hastag" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success reaction" role="alert">
          This Post is reacted by {post.reaction} people.
        </div>
      </div>
    </>
  );
};
export default Post;
