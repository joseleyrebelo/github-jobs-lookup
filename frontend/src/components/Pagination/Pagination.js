import React from "react";
import { useDispatch } from "react-redux";

import { UPDATE_CURRENT_PAGE } from "../../_reducers/general-reducer";

const Pagination = (props) => {
  const dispatch = useDispatch();

  const current = props.current;
  const total = props.total;

  const handlePageClick = (e) => {
    let n_page = parseInt(e.target.getAttribute("target_index"));
    dispatch({ type: UPDATE_CURRENT_PAGE, payload: n_page });
  };

  let pages = [];
  for (let i = 1; i <= total; i++) {
    pages.push(i);
  }

  return (
    <div className="app__pagination">
      {pages.map((val, i) => (
        <span
          key={i}
          className={`item ${val === current ? "active" : ""}`}
          target_index={val}
          onClick={handlePageClick}
        >
          {val}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
