import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function PolybiusLogic({ info }) {
  function polybius(input, encode = true) {
    let encodingObject = {
      " ": " ",
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };

    let decodingObject = {
      " ": " ",
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i/j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (encode === "Encode") {
      let finalString = "";
      for (let letter of input.toLowerCase()) {
        let currentIndex = alphabet.indexOf(letter);
        if (currentIndex < 0) {
          finalString += letter;
          continue;
        }
        finalString += encodingObject[letter];
      }
      return finalString;
    }

    if (encode === "Decode") {
      let inputArray = input.split("");

      let filteredArray = inputArray.filter((number) => number > 0);
      if (filteredArray.length % 2 === 1) {
        return "Please enter an even number of digits";
      }

      let combinedArray = [];

      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > 0) {
          //   inputArray[i] = parseInt(inputArray[i]);
          let digitA = inputArray[i];
          let digitB = inputArray[++i];
          combinedArray.push(digitA + digitB);
        } else combinedArray.push(inputArray[i]);
      }

      console.log(combinedArray);

      let finalString = "";

      for (let letter of combinedArray) {
        if (letter > 0) {
          letter = parseInt(letter);
        }
        if (typeof letter === "string") {
          finalString += letter;
          continue;
        }
        finalString += decodingObject[letter];
      }
      if (finalString.includes("undefined")){
        return "Error: Please enter valid Polybius Square number pairs."
      }
      return finalString;
    }
  }

  if (info.content) {
    return (
      <>
        <Row>
          <Card body>Original Text: {info.content.toUpperCase()}</Card>
        </Row>
        <Row>
          <Card body>
            {info.encodeStatus}d text:{" "}
            {polybius(info.content, info.encodeStatus).toUpperCase()}
          </Card>
        </Row>
      </>
    );
  }
}

export default PolybiusLogic;
