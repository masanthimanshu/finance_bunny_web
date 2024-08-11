import React from "react";
import { Router } from "./utils/router";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
