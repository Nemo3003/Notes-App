import React, { useState } from "react";
import swal from "sweetalert";
import { Navigate, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const LoginScreen = () => {
  const [values, setValues] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const navigate = useNavigate();

  const { user, password } = values;

  const handleNight = () => {
    document.body.classList.toggle("dark");
    
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "" || password === "") {
      swal({
        title: "Make sure to fill in with your username and password",
        text: "Fields must not be empty",
        icon: "warning",
        button: "OK",
      });
      return; //This will force the user to complete both fields
    }

    if (user !== "engineer-trainee" || password !== "123456") {
      swal({
        title: "Invalid Credentials",
        text: "The username or password is incorrect",
        icon: "warning",
        button: "OK",
      });
      return;
    }

    if (user === "engineer-trainee" && password === "123456") {
      swal({
        title: "Success!",
        icon: "success",
        button: "OK",
      });
      localStorage.setItem("engineerTrainee", { user, password });
      navigate("/mynotes");
      return;
    }
  };
  let engineerTrainee = localStorage.getItem("engineerTrainee");

  return (
    <>
      {engineerTrainee ? <Navigate replace to="/mynotes" /> : null}
      <div className="Auth-form-container">
        <Button variant="primary" onClick={handleNight}>Night/Light Mode</Button>
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"
              name="user"
              value={user}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleInputChange}
              autoComplete="off"

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};
