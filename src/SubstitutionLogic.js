import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function SubstitutionLogic({ info }) {
  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26)
      return "The cypher alphabet must be exactly 26 characters long";

    let alphabetArray = alphabet.split("");
    let sortedAlphabetArray = alphabetArray.sort();
    for (let i = 0; i < sortedAlphabetArray.length; i++) {
      if (sortedAlphabetArray[i] === sortedAlphabetArray[i + 1]) {
        return "Please enter a unique character for each letter in the cypher alphabet";
      }
    }

    let result = "";

    let lowerCaseInput = input.toLowerCase();
    let lowerCaseCypherAlphabet = alphabet.toLowerCase();
    let regularAlphabet = "abcdefghijklmnopqrstuvwxyz";

    if (encode === "Encode") {
      for (let letter of lowerCaseInput) {
        let searchedForIndex = regularAlphabet.indexOf(letter);

        if (searchedForIndex < 0) {
          result += letter;
          continue;
        }

        //         letter = lowerCaseCypherAlphabet[searchedForIndex];
        result += lowerCaseCypherAlphabet[searchedForIndex];
      }
    }

    if (encode === "Decode") {
      for (let letter of lowerCaseInput) {
        let searchedForIndex = lowerCaseCypherAlphabet.indexOf(letter);

        if (searchedForIndex < 0) {
          result += letter;
          continue;
        }

        letter = regularAlphabet[searchedForIndex];

        result += regularAlphabet[searchedForIndex];
      }
    }

    return result;
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
            {substitution(
              info.content,
              info.alphabet,
              info.encodeStatus
            ).toUpperCase()}
          </Card>
        </Row>
      </>
    );
  }
}

export default SubstitutionLogic;
