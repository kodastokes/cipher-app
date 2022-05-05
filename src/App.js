import "./App.css";
import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import LogicTest from "./LogicTest";

function App() {

  const [info, setInfo] = useState({})

  const createInfo = (newInfo) =>
    setInfo(newInfo)

  return (
    <>
      <InputForm createInfo={createInfo}/>
      <LogicTest info={info} />
    </>
  );
}

export default App;
