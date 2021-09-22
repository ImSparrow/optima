import React from "react";
import Card from "../UI/Card";
import PostItem from "./PostItem";
import { Link, useParams } from "react-router-dom";

import classes from "./PostList.module.css";

const PostList = (props) => {
  const params = useParams();
  const paramId = params.userId;
  const filterdPost = props.items.filter((post) => post.creatorId === paramId);
  if (props.items.length === 0) {
    return (
      <div className={`${classes["post-list"]} center`}>
        <Card>
          <h2>No posts found. Maybe create one?</h2>
          <Link to="/posts/new">
            <div className={classes["button"]}>CREATE A POST</div>
          </Link>
        </Card>
      </div>
    );
  }
  // There are two ways to find posts, one from user Id and the other from the content
  // This checks to see if we are searching from user Id or from content
  if (paramId)
    return (
      <ul className={classes["post-list"]}>
        {filterdPost.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              name={post.name}
              post={post.post}
              creatorId={post.creatorId}
            ></PostItem>
          );
        })}
      </ul>
    );
  else {
    return (
      <ul className={classes["post-list"]}>
        {props.items.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              name={post.name}
              post={post.post}
              creatorId={post.creatorId}
            ></PostItem>
          );
        })}
      </ul>
    );
  }
};

export default PostList;
