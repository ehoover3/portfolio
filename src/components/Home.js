import React, { useState } from "react";
import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa";
import profile from "../assets/images/profile.png";
import AnimateLetters from "../components/AnimateLetters";
import Buttons from "../components/Buttons";

export default function Home() {
  let [photo, setPhoto] = useState(false);

  return (
    <Wrapper className='home'>
      <FaUserAstronaut
        style={{
          position: "relative",
          left: photo ? "-40px" : "80px",
          transform: photo ? "rotate(-145deg)" : "rotate(0deg)",
          top: "-20px",
        }}
        className={photo ? "astronaut roll-left" : "astronaut roll-right"}
        onClick={() => setPhoto(!photo)}
      />

      <img
        src={profile}
        alt='profile'
        style={{ width: "90px", position: "relative", top: "-20px", left: "-30px" }}
        className={photo ? "zoom-in" : "zoom-out"}
        onClick={() => setPhoto(!photo)}
      />

      <div>
        <div style={{ fontSize: "1.4rem", color: "#e6af2e" }}>Hello, my name is</div>
        <AnimateLetters words='ERIC HOOVER' html='h1' />
        <div style={{ fontSize: "1.4rem", color: "#6C799D" }}>Full Stack Software Engineer</div>
        <Buttons txt='Hire Me Today' link={"#contact"} marginTop='20px' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #253c78; // dark cornflower blue
  height: 100vh;

  h1 {
    position: relative;
    top: 3px;
    left: -2px;
    font-weight: 600;
    font-size: 4.2rem;
    color: #ccd7f6; // periwinkle crayola
  }

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
