import Card from "../UI/Card";
import classes from "./CommentItem.module.css";
const CommentItem = (props) => {
  return (
    <li className={classes["comment-item"]}>
      <Card className={classes["comment-item__content"]}>
        <div className={classes["comment-item__info"]}>
          <div className={classes["comment-item__user"]}>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
          </div>
          <p>{props.comment}</p>
        </div>
      </Card>
    </li>
  );
};

export default CommentItem;
