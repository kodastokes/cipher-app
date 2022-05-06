import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card'

import InputForm from "./InputForm";
import CaesarLogic from "./CaesarLogic";
import PolybiusLogic from "./PolybiusLogic";
import SubstitutionLogic from "./SubstitutionLogic";

function App() {
  const [info, setInfo] = useState({});

  const createInfo = (newInfo) => setInfo(newInfo);

  return (
    <>
      <Container fluid>
        <Row>
          <Card bg="light">
              <Card.Title className="m-3">
                Cipher Encoder and Decoder
              </Card.Title>
          </Card>
        </Row>
        <Row>
          <InputForm createInfo={createInfo} />
        </Row>
        <Row>
          {info.type === "Caesar Shift" ? (
            <CaesarLogic info={info} />
          ) : info.type === "Polybius Square" ? (
            <PolybiusLogic info={info} />
          ) : (
            <SubstitutionLogic info={info} />
          )}
        </Row>
      </Container>
    </>
  );
}

export default App;
