import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function DetailsOfMissions() {
  const { flight_number } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("flight_number"));

  const [mission, setMission] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://api.spacexdata.com/v3/launches?flight_number=" +
        searchParams.get("flight_number")
    )
      .then((response) => response.json())
      .then((data) => setMission(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <h1>Spaxe X Mission Details: </h1>
      <div className="container mt-5">
        <div className="row">
          {mission &&
            mission.length > 0 &&
            mission.map((missionObj, index) => (
              <div
                className="col-sm d-inline-flex "
                key={missionObj.flight_number}
              >
                <img
                  src={missionObj.links.mission_patch}
                  alt="image"
                  width={400}
                  height={400}
                />
                <div className="col-sm  w-100 p-3 ">
                  <h3>Details : </h3>
                  <p>
                    <strong>Flight Number: </strong>
                    {missionObj.flight_number}
                  </p>
                  <p>
                    <strong>Mission Name:</strong> {missionObj.mission_name}
                  </p>
                  <br />
                  <p>
                    <strong>Launch Year:</strong> {missionObj.launch_year}
                  </p>
                  <br />

                  <p>
                    <strong>Site: </strong>
                    {missionObj.launch_site.site_name_long}
                  </p>
                  <br />
                  <p>
                    <strong>Details:</strong> {missionObj.details}
                  </p>
                  <br />
                  <p>
                    <strong>Nationality:</strong>
                    <br />
                    {missionObj.rocket.second_stage.payloads[0].nationality}
                  </p>
                  <p>
                    <strong>Customers:</strong>
                    <br />
                    {missionObj.rocket.second_stage.payloads[0].customers}
                  </p>

                  <br />
                  <p>
                    <strong>Launch Failture Reason: </strong>
                    {missionObj.launch_failure_details.reason}
                    {console.log(flight_number)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
export default DetailsOfMissions;
