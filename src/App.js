import "./App.css";
import React, { useState } from "react";
import InputForm from "./InputForm";
import CaesarLogic from "./CaesarLogic";
import PolybiusLogic from "./PolybiusLogic";
import SubstitutionLogic from "./SubstitutionLogic";

function App() {

  const [info, setInfo] = useState({})

  const createInfo = (newInfo) =>
    setInfo(newInfo)

  return (
    <>
      <InputForm createInfo={createInfo}/>
      {info.type === "Caesar Shift" ? <CaesarLogic info={info} /> : info.type === "Polybius Square" ? <PolybiusLogic info={info} /> : <SubstitutionLogic info={info} /> }
    </>
  );
}

export default App;
