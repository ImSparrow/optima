import { useRef, useState } from "react";
import classes from "./Comment.module.css";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../../store/PostSlice";
const Comment = () => {
  const postId = useParams().postId;
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const comment = messageRef.current.value;
    if (!name.trim() || !email.trim() || !comment.trim()) {
      setError(true);
      return;
    }
    const newComment = {
      name,
      email,
      comment,
      id: uuid(),
      postId,
    };
    dispatch(postAction.addComment(newComment));
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <>
      <form className={classes["post-form"]} onSubmit={placeSubmitHandler}>
        <h2>Post a reply</h2>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef}></input>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef}></input>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            rows="4"
            cols="50"
            ref={messageRef}
          ></textarea>
        </div>
        {error && <div>Fields must not be empty</div>}
        <div className={classes["button-container"]}>
          <button type="submit" className={classes["button"]}>
            Reply
          </button>
        </div>
      </form>
    </>
  );
};

export default Comment;
