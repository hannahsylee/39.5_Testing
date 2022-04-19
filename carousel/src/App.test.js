import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

/** Smoke Test */
it("renders without crashing", function() {
  render(<App />);
});
