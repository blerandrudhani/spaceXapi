import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DetailsComponent from "../Components/detailsComponent";
import "bootstrap/dist/css/bootstrap.css";

function FetchAll() {
  const [mission, setMission] = useState([]);

  const fetchData = () => {
    return fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => setMission(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  let url = "/details?flight_number=";
  return (
    <main>
      <h1>Spaxe X Missions: </h1>
      <div className="container mt-5">
        <div className="row ">
          {mission &&
            mission.length > 0 &&
            mission.map((missionObj, index) => (
              <div className="col-sm mt-5 " key={missionObj.flight_number}>
                <a href={url + missionObj.flight_number}>
                  <img
                    src={missionObj.links.mission_patch_small}
                    alt="image"
                    width={100}
                  />
                  {missionObj.mission_name}
                </a>
                <br />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default FetchAll;
