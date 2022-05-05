import React from "react";

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
        <p> The text you entered is: {info.content}</p>
        <p> Your text was shifted by {info.shift}</p>
        <p>
          {" "}
          Your {info.encodeStatus.toLowerCase()}d text is:{" "}
          {caesar(info.content, info.shift, info.encodeStatus)}{" "}
        </p>
      </>
    );
  }
}

export default CaesarLogic;
