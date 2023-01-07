// import React from "react";
// import ReactDOM from "react-dom/client";
// import Components from "./Components/component";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Components />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Components from "./Components/fetchComponent";
import DetailsComponent from "./Components/detailsComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
