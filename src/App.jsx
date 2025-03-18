import React from "react";
import { Routes, Route } from "react-router-dom";

import "./css/styles.css";
import ZoomRespDiv from "./components/ZoomRespDiv.jsx";

const App = () => {
  return (
    <div className="app-div">
      <Routes>
        <Route path="/" element={<ZoomRespDiv />}></Route>
      </Routes>
    </div>
  );
};

export default App;
