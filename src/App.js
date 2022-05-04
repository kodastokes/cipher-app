import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import InputForm from "./InputForm";

function App() {
  return (
    <>
      <InputForm/>
    </>
  )
}

export default App;