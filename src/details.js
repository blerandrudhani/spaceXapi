import React, { Component } from "react";
import DetailsComponent from "./Components/detailsComponent";
import Coments from "./Components/commentsComponent";

function Details() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <DetailsComponent />
        </div>

        <div className="col-sm ">
          <Coments />
        </div>
      </div>
    </div>
  );
}
export default Details;
