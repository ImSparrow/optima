import UsersList from "../components/Users/UsersList";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.post.users);
  document.title = "All User's Posts";
  return <UsersList users={users}></UsersList>;
};

export default Users;
