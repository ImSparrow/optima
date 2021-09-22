import { useSelector } from "react-redux";
import { useParams } from "react-router";
import PostList from "../components/Posts/PostList";
import UsersList from "../components/Users/UsersList";

const SearchPost = () => {
  const search = useParams().searchId.replaceAll("%20", " ");
  const posts = useSelector((state) => state.post.posts);
  const users = useSelector((state) => state.post.users);
  const postFilter = posts.filter(
    (post) =>
      post.name.toLowerCase().includes(search) ||
      post.email.toLowerCase().includes(search) ||
      post.post.toLowerCase().includes(search)
  );
  const userFilter = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
  );
  document.title = "Finding Posts...";
  return (
    <>
      <UsersList users={userFilter}></UsersList>
      <PostList items={postFilter}></PostList>
    </>
  );
};

export default SearchPost;
