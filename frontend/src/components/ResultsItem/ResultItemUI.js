import React from "react";
import ReactHtmlParser from "react-html-parser";

const ResultItemUI = (props) => {
  let job = props.job;
  return (
    <div className="entry entry--post">
      <div className="entry--post__top">
        <div className="entry--post__top-left">
          <div className="entry__title">
            {job.title}
            <span className="entry__type">{job.type}</span>
          </div>
          <div className="entry__company-name">
            <a href={job.company_url}>{job.company}</a> ({job.location})
          </div>

          <div className="entry--post__date">
            Posted in <a href={job.url}>GitHub Jobs</a>(
            {new Date(job.created_at).toLocaleDateString("en-GB")})
          </div>
        </div>
        <div className="entry--post__top-right">
          <div className="entry__company-img-holder">
            <img
              className="entry__company-img"
              src={job.company_logo}
              alt={job.company}
            />
          </div>
        </div>
      </div>

      <div className="entry__body">{ReactHtmlParser(job.description)}</div>
      <div className=""></div>
      {/* * May find use later on */}
      {/* <div className="entry__apply">{ReactHtmlParser(job.how_to_apply)}</div> */}
    </div>
  );
};

export default ResultItemUI;
