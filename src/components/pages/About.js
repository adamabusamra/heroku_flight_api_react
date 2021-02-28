import React from "react";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>About This App</h1>
        <p className="my-1 mt-3">
          This is a API Thats connects React & laravel and it calls a flight
          aviation API that returns flight details
        </p>
        <p className="bg-dark p mt-5">
          <strong>Version: </strong> 1.0.0
        </p>
        <p>Built by Adam Abusamra</p>
        <p>
          <i class="fab fa-github"></i> Git repository :{" "}
          <a href="http://github.com/adamabusamra" target="_blank">
            https://github.com/adamabusamra/flight_tracker_Laravel-react_API
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
