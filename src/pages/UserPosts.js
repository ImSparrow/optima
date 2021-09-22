import PostList from "../components/Posts/PostList";
import { useSelector } from "react-redux";

const UserPosts = () => {
  const post = useSelector((state) => state.post.posts);
  document.title = `User's Posts`;
  return <PostList items={post}></PostList>;
};

export default UserPosts;
