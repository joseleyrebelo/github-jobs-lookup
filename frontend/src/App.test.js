import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./_reducers";

import App from "./App";

describe("App (initial)", () => {
  it("App renders without crashing", () => {
    const store = createStore(reducer);

    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
