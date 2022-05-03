import React, { useState } from "react";

function caesar(input, shift, encode = true) {
    // your solution code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let inputStr = input.toLowerCase()
    let finalStr = ''
    if (!encode) {
        shift = -shift;
    }

    for (let i = 0; i < inputStr.length; i++){
        let currentLetter = inputStr[i];
        
        //identifies current space in index
        let currentIndex = alphabet.indexOf(currentLetter);
        //the new index is the current value + the shift input
        let newIndex = currentIndex + shift;
        //if the current index + shift makes the place greater than 25 it will shift the letter back to the first place in the index
        if (newIndex > 25) {
        newIndex = newIndex -26; 
        }
        //if the current index is less than 0, the first place in the index, it will shift the index space back to the last place in the index
        if (newIndex < 0) {
        newIndex = newIndex + 26
        }
        //leaves spaces and other symbols as is
        if (currentIndex < 0) {
        finalStr += currentLetter
        continue
        }
        //if shift is 0, greater than 25, or less than -25 it will return false
        if (shift == 0 || shift > 25 || shift < -25){
        return false
        }
        //if all conditions are met the function will add the letter at the new index to the finalString
        else finalStr += alphabet[newIndex];
    }
    return finalStr
    }

function CaesarCypher(){

    return (
        <>
        </>
    )
}