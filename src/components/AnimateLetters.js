import React, { useState } from "react";
import { COLOR, COUNT, useStore } from "../services/Store";

export default function AnimateLetters(props) {
  //   VANILLA JAVASCRIPT SECTION

  // variables
  let { words, html } = props;
  const dispatch = useStore((state) => state.dispatch);
  const color = useStore((state) => state.color);
  const count = useStore((state) => state.count);

  // functions
  async function handleClick() {
    await dispatch({ type: COUNT, payload: count + 1 });

    // change colors onclick
    if (count % 4 === 0) dispatch({ type: COLOR, payload: "#40a541" }); // green
    else if (count % 4 === 1) dispatch({ type: COLOR, payload: "#0096D1" }); // blue
    else if (count % 4 === 2) dispatch({ type: COLOR, payload: "#D66A57" }); // orange
    else if (count % 4 === 3) dispatch({ type: COLOR, payload: "#ccd7f6" }); // grey
  }

  let wordsArray = words.split("").map((letter) => {
    {
      return letter === " " ? (
        <span className='letter' style={{ width: "15px" }}></span>
      ) : (
        <span className='letter' style={{ color: color }}>
          {letter}
        </span>
      );
    }
  });

  //   JSX SECTION
  if (html === "h1")
    return (
      <h1 style={{ display: "flex" }} onClick={handleClick}>
        {wordsArray}
      </h1>
    );
  else
    return (
      <h2 style={{ display: "flex", justifyContent: "center" }} onClick={handleClick}>
        {wordsArray}
      </h2>
    );
}
