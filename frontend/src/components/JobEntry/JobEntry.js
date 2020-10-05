import React from "react";
import { Link } from "react-router-dom";

const JobEntry = (props) => {
  let data = props.data;
  return (
    <div className="entry entry--card" key={data.id}>
      <div className="entry__index">#{props.target_id}</div>
      <div className="entry--card__left">
        <div className="entry__title">{data.title}</div>
        <div>
          <span className="entry__company-name">{data.company}</span>
          <span className="entry__type">{data.type}</span>
        </div>
      </div>
      <div className="entry--card__right">
        <div className="">{data.location}</div>
      </div>
      <Link
        className="entry__link"
        to={`/results-item/${props.target_id}`}
      ></Link>
    </div>
  );
};

export default JobEntry;
