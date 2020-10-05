import React from "react";
import JobEntry from "../JobEntry/JobEntry";

const JobList = (props) => {
  const jobs = props.jobs;
  return (
    <div className="app__list">
      {jobs.map((job, i) => (
        <JobEntry key={i} target_id={i + 1} data={job} />
      ))}
    </div>
  );
};

export default JobList;
