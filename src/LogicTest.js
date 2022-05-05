import React from "react";

function LogicTest({ info }) {
  function caesar(input, shift, encode) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let inputStr = input.toLowerCase();
    let finalStr = "";
    shift = parseInt(shift)
    if (encode === "Encode") {
      shift = -shift;
    }

    for (let i = 0; i < inputStr.length; i++) {
      let currentLetter = inputStr[i];

      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      if (newIndex < 0) {
        newIndex = newIndex + 26;
      }
      if (currentIndex < 0) {
        finalStr += currentLetter;
        continue;
      }
      if (shift == 0 || shift > 25 || shift < -25) {
        return false;
      } else finalStr += alphabet[newIndex];
    }
    return finalStr;
  }

  if (info.content) {
    return (
      <>
        <p> The text you entered is: {info.content}</p>
        <p> Your {info.encodeStatus.toLowerCase()}d text is: {caesar(info.content, info.shift, info.encodeStatus)} </p>
      </>
    );
  }
}

export default LogicTest;
