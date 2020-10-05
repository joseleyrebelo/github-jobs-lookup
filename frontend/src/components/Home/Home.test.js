import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../_reducers";

import Home from "./Home";

describe("Home (listing)", () => {
  const store = createStore(reducer);
  const mockup_reply = {
    success: true,
    data: [],
    pages: 3,
  };

  it("Querying API", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockup_reply),
      })
    );

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const spy = jest.spyOn(global, "fetch");

    expect(spy).toHaveBeenCalled();
  });
});
