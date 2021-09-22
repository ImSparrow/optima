import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import CommentItem from "./CommentItem";
import classes from "./CommentList.module.css";
const CommentList = (props) => {
  const params = useParams();
  const paramId = params.postId;

  const filteredComments = props.items.filter(
    (post) => post.postId === paramId
  );
  if (props.items.length === 0) {
    return (
      <div className={`${classes["comment-list"]} center`}>
        <Card>
          <h2>No Comments found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className={classes["comment-list"]}>
      {filteredComments.map((comment) => {
        return (
          <CommentItem
            key={comment.id}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            comment={comment.comment}
          ></CommentItem>
        );
      })}
    </ul>
  );
};

export default CommentList;
