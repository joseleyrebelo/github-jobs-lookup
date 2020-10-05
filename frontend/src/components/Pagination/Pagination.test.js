import React from "react";
import { mount } from "enzyme";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../_reducers";

import Pagination from "./Pagination";

describe("Pagination component", () => {
  const store = createStore(reducer);
  const total = 3;
  const current = 2;

  const wrapper = mount(
    <Provider store={store}>
      <Pagination current={current} total={total} />
    </Provider>
  );
  it("Active element corresponds to current", () => {
    expect(
      wrapper
        .find(".app__pagination")
        .childAt(current - 1)
        .hasClass("active")
    ).toBeTruthy();
  });
  it("To have same amount of items as total", () => {
    expect(wrapper.find(".app__pagination").children()).toHaveLength(total);
  });
});
