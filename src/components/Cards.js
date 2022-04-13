import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import EmailToast from "../components/EmailToast";
import profile2 from "../assets/images/profile2.png";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Cards() {
  const style = {
    position: "absolute",
    bottom: "50px",
    left: "-110px",
    top: "25px",
    width: "100px",
    height: "100px",
    backgroundColor: "#ccd7f6",
  };

  const [show, setShow] = useState(false);

  function handleToast() {
    setShow(!show);
  }

  return (
    <Card>
      <Card.Img variant='top' src={profile2} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>Get In Touch</Card.Title>
        <a
          href='https://www.linkedin.com/in/hoov/'
          style={{
            color: "#253c78",
            display: "flex",
            textDecoration: "none",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <FiLinkedin style={{ fontSize: "50px" }} className='contact' />
          <span style={{ color: "#ccd7f6", paddingLeft: "10px" }}> LinkedIn</span>
        </a>

        <a
          style={{ flex: "display", marginTop: "10px" }}
          onClick={() => {
            navigator.clipboard.writeText("ehoover3@yahoo.com");
            setShow(true);
          }}
        >
          <FiMail style={{ color: "#253c78", fontSize: "50px" }} className='contact' />
          <span style={{ paddingLeft: "5px" }}> ehoover3@yahoo.com </span>
        </a>

        <EmailToast handleToast={handleToast} show={show} style={style} />
      </Card.Body>
    </Card>
  );
}
