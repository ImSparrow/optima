import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";
import NewPost from "./pages/NewPost";
import UserPosts from "./pages/UserPosts";
import Users from "./pages/Users";
import store from "./store/store";
import { Provider } from "react-redux";
import ViewPost from "./pages/ViewPost";
import SearchPost from "./pages/SearchPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users></Users>
            </Route>
            <Route path="/:userId/posts" exact>
              <UserPosts></UserPosts>
            </Route>
            <Route path="/posts/new" exact>
              <NewPost></NewPost>
            </Route>
            <Route path="/post/:postId" exact>
              <ViewPost></ViewPost>
            </Route>
            <Route path="/search/:searchId" exact>
              <SearchPost></SearchPost>
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
