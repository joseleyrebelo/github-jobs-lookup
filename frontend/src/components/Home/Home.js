import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomURL } from "../../_shared/CustomURL";
import Pagination from "../Pagination/Pagination";
import JobList from "../JobList/JobList";
import {
  IS_LOADING,
  UPDATE_JOBS,
  UPDATE_TOTAL_PAGES,
  IS_LOADING_DONE,
  HANDLED_NEW_CURRENT,
  NEW_SEARCH_HANDLED,
} from "../../_reducers/general-reducer";

const Home = () => {
  const dispatch = useDispatch();

  // Get redux states
  const total_pages = useSelector((data) => data.general.r_pages_total);
  const current_page = useSelector((state) => state.general.r_pages_current);
  const changed_page = useSelector((state) => state.general.r_changed_page);
  const new_search = useSelector((state) => state.general.new_search);
  const jobs = useSelector((state) => state.general.jobs);
  let jobs_length = jobs.length;

  // Query backend
  const queryJobs = (custom_url) => {
    dispatch({ type: IS_LOADING });
    fetch(CustomURL.get())
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: UPDATE_JOBS, payload: response.data });
        if (!CustomURL.queries.page) {
          dispatch({ type: UPDATE_TOTAL_PAGES, payload: response.pages });
        }
        dispatch({ type: IS_LOADING_DONE });
        return false;
      })
      .catch((error) => {
        throw error;
      });
  };

  // Handle if new query is required
  // * Not, if routing back to home, but having jobs loaded from redux
  // * Yes, if page is being loaded or refreshed
  const queryJobsHandler = () => {
    if (jobs_length === 0) {
      queryJobs();
    }
  };

  useEffect(queryJobsHandler, []);

  if (changed_page !== false) {
    CustomURL.queries["page"] = current_page;
    queryJobs();
    dispatch({ type: HANDLED_NEW_CURRENT });
  }

  if (new_search !== false) {
    CustomURL.queries["s"] = new_search;
    queryJobs();
    dispatch({ type: NEW_SEARCH_HANDLED });
  }

  return (
    <React.Fragment>
      <JobList jobs={jobs} />
      <Pagination current={current_page} total={total_pages} />
    </React.Fragment>
  );
};

export default Home;
