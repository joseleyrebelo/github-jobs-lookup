import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NEW_SEARCH } from "../../_reducers/general-reducer";

const Home = () => {
  const dispatch = useDispatch();

  const is_search_item_view = useSelector(
    (data) => data.general.is_search_item_view
  );

  const [formStates, setFormStates] = useState({
    search: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    startNewSearch();
  };

  const handleSearchChange = (e) => {
    setFormStates({ ...formStates, search: e.target.value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    startNewSearch();
  };

  const startNewSearch = () => {
    dispatch({ type: NEW_SEARCH, payload: formStates.search });
  };

  return (
    <form
      className={`app__navbar ${is_search_item_view ? "go-back-mode" : ""}`}
      onSubmit={handleFormSubmit}
    >
      <Link className="app__navbar-logo" to="/">
        _/obz
      </Link>
      <input
        id="task"
        className="app__navbar-search"
        placeholder=""
        type="text"
        value={formStates.search}
        onChange={handleSearchChange}
      />
      <button className="app__navbar-submit" onClick={handleButtonClick}>
        Search
      </button>
      <Link className="app__navbar-go-back" to="/">
        {`< go back`}
      </Link>
    </form>
  );
};

export default Home;
