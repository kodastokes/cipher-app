import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function CaesarLogic({ info }) {
  function caesar(input, shift, encode) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let inputString = input.toLowerCase();
    let finalString = "";
    shift = parseInt(shift);

    if (encode === "Encode") {
      shift = -shift;
    }

    if (shift > 25 || shift < -25) {
      shift = shift % 26;
    }

    if (shift === 0) {
      return inputString;
    }

    for (let i = 0; i < inputString.length; i++) {
      let currentLetter = inputString[i];

      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      if (newIndex < 0) {
        newIndex = newIndex + 26;
      }
      if (currentIndex < 0) {
        finalString += currentLetter;
        continue;
      } else finalString += alphabet[newIndex];
    }
    //finalString = finalString.toLocaleUpperCase()
    return finalString;
  }

  if (info.content) {
    return (
      <>
        <Row>
          <Card body>Original Text: {info.content.toUpperCase()}</Card>
        </Row>
        {/* <Row>
          <Card body>Your text was shifted by {info.shift}</Card>
        </Row> */}
        <Row>
          <Card body>
            {info.encodeStatus}d text:{" "}
            {caesar(info.content, info.shift, info.encodeStatus).toUpperCase()}
          </Card>
        </Row>
      </>
    );
  }
}

export default CaesarLogic;
