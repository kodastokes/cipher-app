import "./App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputForm from "./InputForm";
import CaesarLogic from "./CaesarLogic";
import PolybiusLogic from "./PolybiusLogic";
import SubstitutionLogic from "./SubstitutionLogic";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [info, setInfo] = useState({});
  const [answer, setAnswer] = useState({});

  const createInfo = (newInfo) => setInfo(newInfo);
  const createAnswer = (newAnswer) => setAnswer(newAnswer)

  return (
    <>
      <Container fluid>
        <Row>
          <InputForm createInfo={createInfo} />
        </Row>
        <Row>
        {info.type === "Caesar Shift" ? (
            <CaesarLogic info={info} />
          ) : info.type === "Polybius Square" ? (
            <PolybiusLogic info={info} />
          ) :
            <SubstitutionLogic info={info} />}
        </Row>
      </Container>
    </>
  );
}

export default App;
