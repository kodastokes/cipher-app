import React, { useState } from "react";

function LogicTest({ info }) {
  function caesar(input, shift, encode) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let inputStr = input.toLowerCase();
    let finalStr = "";
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
  
  console.log(caesar("qbpq", 3, "Decode"));
  //   console.log(caesar("test", 3, "Encode"))

  console.log(info.content, info.shift, info.encodeStatus);

  if (info.content) {
    return (
      <>
        <div> {caesar(info.content, info.shift, info.encodeStatus)} </div>
      </>
    );
  }
}

export default LogicTest;
