import React from "react";
import Components from "./Components/fetchComponent";
import DetailsComponent from "./Components/detailsComponent";
import Coments from "./Components/commentsComponent";
import Details from "./details";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
