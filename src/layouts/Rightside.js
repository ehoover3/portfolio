import Styled from "styled-components";
import Toast from "react-bootstrap/Toast";
import EmailToast from "../components/EmailToast";

import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useStore } from "../services/Store";

export default function Rightside() {
  const [show, setShow] = useState(false);
  const color = useStore((state) => state.color);

  const style = {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "100px",
    backgroundColor: "#ccd7f6",
  };

  function handleToast() {
    setShow(!show);
  }

  return (
    <div style={{ background: "pink" }}>
      <EmailToast handleToast={handleToast} show={show} style={style} />

      {/* <Toast
        bg='Primary'
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          width: "100px",
          backgroundColor: "#ccd7f6",
        }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
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
          Copied to Clipboard!
        </Toast.Body>
      </Toast> */}
      <Container>
        <a
          onClick={() => {
            navigator.clipboard.writeText("ehoover3@yahoo.com");
          }}
        >
          <Rotate onClick={() => setShow(true)} style={{ color: color }} className='rightSide'>
            ehoover3@yahoo.com
          </Rotate>
        </a>
      </Container>
    </div>
  );
}

const Container = Styled.div`
  position: fixed;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px;
  color: #6C799D; // cool grey

  a {
    // FONT
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;

    
    // SIZE
    min-height: 52px;
    min-width: 75px;
    &:hover {
      svg,
      div {
        color: #e6af2e; // goldenrod
      }
    }
  }
`;

const Rotate = Styled.div`
  transform: rotate(-270deg);
  position: absolute;
  right: 60px;
 `;
