/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Home from "../Home.jsx";
import Form from "../Form.jsx";

function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default RouterApp;
