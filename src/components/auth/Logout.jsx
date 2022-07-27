import React from 'react';
import swal from "sweetalert";

export const Logout = ()=>{
    localStorage.removeItem("engineerTrainee");
    swal({
        title: "You have been logged out",
        text: "You have been logged out",
        icon: "success",
        button: "OK",
      }).then(()=>{
        window.location = "/home"
      })
}