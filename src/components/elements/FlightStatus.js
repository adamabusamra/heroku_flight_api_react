import React from "react";

const FlightStatus = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center pt-3">
          <h1>{data.airline.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center p-3">
          <h1>
            {data.departure.timezone.slice(
              data.departure.timezone.search("/") + 1
            )}
          </h1>
          <p style={{ color: "#003699" }}>{data.departure.airport}</p>
        </div>
        <div className="col-4 text-center p-3">
          <h1>
            <i
              class="fas fa-exchange-alt fa-2x"
              style={{ color: "#003699" }}
            ></i>
          </h1>
        </div>
        <div className="col-4 text-center p-3">
          <h1>
            {data.arrival.timezone.slice(data.arrival.timezone.search("/") + 1)}
          </h1>
          <p style={{ color: "#003699" }}>{data.arrival.airport}</p>
        </div>
      </div>
      {/* 
      
      
      
      */}
      <div className="row">
        <div className="col-3 text-center px-3">
          <h3>
            {/* <i class="fas fa-plane-departure " style={{ color: "#003699" }}></i> */}
            Status
          </h3>
          <p style={{ color: "#003699" }}>
            <span class="badge badge-primary" style={{ fontSize: "1rem" }}>
              {data.flight_status}
            </span>
          </p>
        </div>
        <div className="col-3 text-center px-3">
          <h3>Date</h3>
          <p style={{ color: "#003699" }}>{data.flight_date}</p>
        </div>
        <div className="col-3 text-center px-3">
          <h3>Departure</h3>
          <p style={{ color: "#003699" }}>
            {data.departure.actual
              .slice(data.departure.actual.search("T") + 1)
              .replace(
                data.departure.actual.slice(data.departure.actual.indexOf("+")),
                ""
              )}
          </p>
        </div>
        <div className="col-3 text-center px-3">
          <h3>Arival</h3>
          <p style={{ color: "#003699" }}>
            {data.arrival.actual
              .slice(data.arrival.actual.search("T") + 1)
              .replace(
                data.arrival.actual.slice(data.arrival.actual.indexOf("+")),
                ""
              )}
          </p>
        </div>
      </div>
    </>
  );
};

export default FlightStatus;
