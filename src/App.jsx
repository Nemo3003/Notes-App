import React from "react";
import MyNotes from "./components/MyNotes";
import ArchivedNotes from "./components/ArchivedNotes";
import { LoginScreen } from "./components/auth/Login";
import { Home } from "./components/Home";
import { Logout } from "./components/auth/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route exact path="/mynotes" element={<MyNotes />} />
          <Route exact path="/archivednotes" element={<ArchivedNotes />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
