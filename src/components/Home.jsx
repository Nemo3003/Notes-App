import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { LoginScreen } from "./auth/Login";
import '../styles/home.css';


export const Home = () => {

    return(
        <>
            <div class="card text-center">
            <div class="card-header">
                NOTES APP
            </div>
            <div class="card-body">
                <h5 class="card-title">Welcome to Notes app!</h5>
                <p class="card-text">Create, edit, and store your notes!</p>
                <Link to="/" class="btn btn-primary">Go to login!</Link>
            </div>
            <div class="card-footer text-muted">
                You will love it!
            </div>
            </div>
        </>
    );
    
}