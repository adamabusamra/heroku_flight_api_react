import React, { useState } from "react";
import FlightStatus from "../elements/FlightStatus";
//Import Axios to make HTTP request
import axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";
const Home = () => {
  //Set up the state that will store the response from the backend API
  const [flight, setFlight] = useState("");
  //Set up the state that will store the errors catched from the request
  const [errors, setErrors] = useState("");

  //Send request to laravel and get the data from flight APi
  const getFlightDeatails = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.get(
        //This is the URL to my laravel backend api on 000 Webhost servers
        `https://adamfirsthost.000webhostapp.com/api/getFlightDetails/${e.target[0].value}`
      );
      //Storing flight response in state
      setFlight(res.data.api_res.data[0]);
      console.log(res);
    } catch (err) {
      setErrors(err.message);
      console.log(err);
    }
  };
  return (
    <>
      <div className="form-card ">
        <div className="form ">
          <h1>Enter Flight Number</h1>
          <Form onSubmit={getFlightDeatails}>
            <FormGroup className="position-relative ">
              {!errors && flight == undefined ? (
                <Input invalid required />
              ) : (
                <Input required />
              )}
              {flight == undefined ? (
                <p className="text-danger d-inline">Flight Does Not Exist</p>
              ) : null}
              <Button color="primary float-right">
                <i className="fa fa-search"></i>
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
      {flight ? (
        <div className="status-card mt-3 mb-5">
          <FlightStatus data={flight} />
        </div>
      ) : null}
    </>
  );
};

export default Home;
