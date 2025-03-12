import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./components/section/Login";




interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Login />} path="/login" />
    {/* <Route element={<Patient/>} path="/products"></Route> */}
  </Routes>

  );
};

export default App;
