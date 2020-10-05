import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import JobList from "./JobList";

describe("JobList component", () => {
  const jobs = [
    {
      company: "GoodHuman",
      company_logo:
        "https://images.pexels.com/photos/5198585/pexels-photo-5198585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      company_url: "http://www.getgoodhuman.com",
      created_at: "Wed Sep 23 23:23:44 UTC 2020",
      description: "<p>Job body (this is a p tag) </p>",
      how_to_apply: "<p> How to apply (this is a p tag) </p>",
      id: "73b3a409-ed44-4516-8765-2087e0f1ddc6",
      location: "Los Angeles (remote)",
      title: "Senior Full Stack Developer (Backend and Frontend)",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/73b3a409-ed44-4516-8765-2087e0f1ddc6",
    },
    {
      company: "GoodHuman",
      company_logo:
        "https://images.pexels.com/photos/5198585/pexels-photo-5198585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      company_url: "http://www.getgoodhuman.com",
      created_at: "Wed Sep 23 23:23:44 UTC 2020",
      description: "<p>Job body (this is a p tag) </p>",
      how_to_apply: "<p> How to apply (this is a p tag) </p>",
      id: "73b3a409-ed44-4516-8765-2087e0f1ddc6",
      location: "Los Angeles (remote)",
      title: "Senior Full Stack Developer (Backend and Frontend)",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/73b3a409-ed44-4516-8765-2087e0f1ddc6",
    },
    {
      company: "GoodHuman",
      company_logo:
        "https://images.pexels.com/photos/5198585/pexels-photo-5198585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      company_url: "http://www.getgoodhuman.com",
      created_at: "Wed Sep 23 23:23:44 UTC 2020",
      description: "<p>Job body (this is a p tag) </p>",
      how_to_apply: "<p> How to apply (this is a p tag) </p>",
      id: "73b3a409-ed44-4516-8765-2087e0f1ddc6",
      location: "Los Angeles (remote)",
      title: "Senior Full Stack Developer (Backend and Frontend)",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/73b3a409-ed44-4516-8765-2087e0f1ddc6",
    },
  ];

  const wrapper = mount(
    <BrowserRouter>
      <JobList jobs={jobs} />
    </BrowserRouter>
  );

  it("Renders jobs props", () => {
    expect(wrapper.find(".entry__title").first().text()).toEqual(jobs[0].title);
    expect(wrapper.find(".entry__type").first().text()).toEqual(jobs[0].type);
  });

  it("List reflects json amount of entries", () => {
    expect(wrapper.find(".app__list .entry")).toHaveLength(jobs.length);
  });
});
