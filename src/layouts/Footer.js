import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { FaRegPaperPlane } from "react-icons/fa";
import { useStore } from "../services/Store";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Footer() {
  const color = useStore((state) => state.color);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1030,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        backgroundColor: "#e6af2e",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.5rem 1rem",
        }}
      >
        <FaUserAstronaut />
        Home
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.5rem 1rem",
        }}
      >
        <FaUserAstronaut />
        About
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.5rem 1rem",
        }}
      >
        <TiLightbulb />
        Portfolio
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.5rem 1rem",
        }}
      >
        <FaRegPaperPlane />
        Contact
      </div>
    </div>
  );
}
