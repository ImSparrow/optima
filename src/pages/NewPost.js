import { useRef, useState } from "react";
import { postAction } from "../store/PostSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./NewPost.module.css";
import uuid from "react-uuid";
const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const postRef = useRef();
  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const post = postRef.current.value;
    if (!name.trim() || !email.trim() || !post.trim()) {
      setError(true);
      return;
    }
    const newPost = {
      name,
      email: email.toLowerCase(),
      post,
      id: uuid(),
    };
    dispatch(postAction.addPost(newPost));
    history.push("/");
  };
  document.title = "Creating A New Post";
  return (
    <>
      <form
        className={classes["post-form"]}
        onSubmit={placeSubmitHandler}
        aria-label="Contact information"
      >
        <div className={classes["form-control"]}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef}></input>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef}></input>
          <label htmlFor="post">Post:</label>
          <textarea
            type="text"
            id="post"
            rows="4"
            cols="50"
            ref={postRef}
          ></textarea>
        </div>
        {error && <div>Fields must not be empty</div>}
        <div className={classes["button-container"]}>
          <button type="submit" className={classes["button"]}>
            Create Post
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPost;
