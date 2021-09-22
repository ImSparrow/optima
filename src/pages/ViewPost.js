import Card from "../components/UI/Card";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./ViewPost.module.css";
import { postAction } from "../store/PostSlice";
import { useHistory } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import CommentList from "../components/Comment/CommentList";
const ViewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const comments = useSelector((state) => state.post.comments);
  const paramId = params.postId;
  const post = useSelector((state) =>
    state.post.posts.filter((post) => post.id === paramId)
  );

  const deleteHandler = () => {
    dispatch(postAction.deletePost(post[0]));
    history.replace("/");
  };
  document.title = `${post[0].name}'s Post`;
  return (
    <div className={classes["post-container"]}>
      <Card className={classes["post-item__content"]}>
        <div className={classes["post-item__info"]} role="main">
          <div className={classes["post-item__user"]}>
            <h2>{post[0].name}</h2>
            <h3>{post[0].email}</h3>
          </div>
          <div>
            <p>{post[0].post}</p>
          </div>
        </div>
        <div className={classes["button-container"]}>
          <button onClick={deleteHandler} className={classes["button"]}>
            Delete Post
          </button>
        </div>
      </Card>
      <Comment></Comment>
      <CommentList items={comments}></CommentList>
    </div>
  );
};

export default ViewPost;
