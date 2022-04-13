import React from "react";
import Toast from "react-bootstrap/Toast";
import { AiFillCheckCircle } from "react-icons/ai";

export default function EmailToast(props) {
  const { handleToast, show, style } = props;
  return (
    <Toast
      bg='Primary'
      show={show}
      style={style}
      delay={3000}
      onClose={() => handleToast()}
      autohide
    >
      <Toast.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AiFillCheckCircle style={{ color: "green", fontSize: "25px" }} />
        <span style={{ color: "black" }}>Copied to Clipboard!</span>
      </Toast.Body>
    </Toast>
  );
}
