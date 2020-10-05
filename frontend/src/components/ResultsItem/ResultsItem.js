import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ResultItemUI from "./ResultItemUI";

import {
  IS_SEARCH_ITEM,
  IS_SEARCH_ITEM_DONE,
} from "../../_reducers/general-reducer";

const ResultsItem = ({ match, location }) => {
  const dispatch = useDispatch();
  const index = match.params.resultId;
  const jobs = useSelector((state) => state.general.jobs);
  let job = jobs[index - 1];

  useEffect(() => {
    dispatch({ type: IS_SEARCH_ITEM });
    return () => {
      dispatch({ type: IS_SEARCH_ITEM_DONE });
    };
  }, [dispatch]);

  return (
    <React.Fragment>
      {jobs.length > 0 && <ResultItemUI job={job} index={index} />}
      {jobs.length === 0 && <Redirect from={location.pathname} to="/" />}
    </React.Fragment>
  );
};

export default ResultsItem;
