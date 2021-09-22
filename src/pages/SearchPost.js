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
      post.name.includes(search) ||
      post.email.includes(search) ||
      post.post.toLowerCase().includes(search)
  );
  const userFilter = users.filter(
    (user) => user.name.includes(search) || user.email.includes(search)
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
