import Card from "../UI/Card";
import { Link } from "react-router-dom";
import classes from "./PostItem.module.css";
const PostItem = (props) => {
  return (
    <li className={classes["post-item"]}>
      <Card className={classes["post-item__content"]}>
        <Link to={`/post/${props.id}`}>
          <div className={classes["post-item__info"]}>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            <p>{props.post}</p>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default PostItem;
