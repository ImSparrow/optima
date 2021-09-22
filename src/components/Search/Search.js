import { useRef } from "react";
import { useHistory } from "react-router";
import classes from "./Search.module.css";
const Search = () => {
  const history = useHistory();
  const searchRef = useRef();
  const searchHandler = (event) => {
    if (event.key === "Enter") {
      const search = searchRef.current.value;
      searchRef.current.value = "";
      history.push(`/search/${search}`);
    }
  };
  const searchHandlerClick = () => {
    const search = searchRef.current.value;
    searchRef.current.value = "";
    history.push(`/search/${search}`);
  };
  return (
    <div className={classes.searchbox} role="search">
      <input
        className={classes.searchbar}
        type="text"
        onKeyPress={searchHandler}
        placeholder="search..."
        ref={searchRef}
      />
      <button className={classes.button} onClick={searchHandlerClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
