import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HANDLED_IS_LOADING_NEW } from "./_reducers/general-reducer";
import "./App.css";
import loaderGif from "./loader.gif";

// Pages & Components
import Home from "./components/Home/Home";
import ResultsItem from "./components/ResultsItem/ResultsItem";
import NavBar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();

  const is_loading = useSelector((state) => state.general.is_loading);
  const is_loading_new_action = useSelector(
    (state) => state.general.is_loading_new_action
  );

  const [loadingStates, setLoadingStates] = useState({
    show: false,
    reveal: false,
  });

  const showLoading = () => {
    setLoadingStates({ ...loadingStates, show: true, reveal: true });
  };

  useEffect(showLoading, []);

  const hideLoading = () => {
    setLoadingStates({ ...loadingStates, reveal: false, show: false });
  };

  if (is_loading_new_action) {
    if (is_loading) {
      showLoading();
    } else {
      hideLoading();
    }
    dispatch({ type: HANDLED_IS_LOADING_NEW });
  }

  return (
    <div className="App">
      <div className="app__center">
        <NavBar />
        <div className="app__body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/results-item/:resultId"
              component={ResultsItem}
            />
          </Switch>
        </div>
      </div>
      <div
        className={`app__loading ${loadingStates.show ? "show" : ""} ${
          loadingStates.reveal ? "reveal" : ""
        }`}
      >
        <img src={loaderGif} alt={"Loading graphic"} />
      </div>
    </div>
  );
}

export default App;
