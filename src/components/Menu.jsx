import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../styles/styles.css';

export const Menu = ()=>{
    const handleNight = () => {
        document.body.classList.toggle("dark-main");
      }
    let engineerTrainee = localStorage.getItem("engineerTrainee");
    return(
    <>
        {!engineerTrainee ? <Navigate replace to="/" /> : null}
      <div className="container-md mb-1">
      <div className="d-flex">
        
        <div className="d-flex align-items-center">
          <h1 className="col-8">My notes</h1>
          <button
            type="button"
            className="btn btn-outline-primary col-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Create note
          </button>
          <Link className="col-4 archiving" to="/archivednotes">
            Archived notes
          </Link>
          <Button onClick={handleNight} variant="primary">Night/Light mode</Button>
        </div>
        </div>
      </div>
      
      </>
    )}