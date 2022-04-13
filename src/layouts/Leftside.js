import Styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useStore } from "../services/Store";

export default function Leftside() {
  const color = useStore((state) => state.color);

  return (
    <div>
      <Container>
        <Icons>
          <a
            href='https://www.linkedin.com/in/hoov/'
            // style={{ color: "#6C799D" }}
            style={{ color: color }}
          >
            <FiLinkedin />
          </a>
          <a
            href='https://github.com/ehoover3'
            // style={{ color: "#6C799D" }}
            style={{ color: color }}
          >
            <FiGithub />
          </a>
        </Icons>
        <Line style={{ background: color }} />
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
  color: #6C799D; // cool grey

  a {
    // FONT
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;

    // SIZE
    &:hover {
      svg,
      div {
        color: #e6af2e; // goldenrod
      }
    }
  }
`;

const Icons = Styled.div`
  position: absolute;
  bottom: 135px;
  left: 12.5px;
`;

const Line = Styled.div`
  content: "";
  display: block;
  width: 1px;
  height: 225px;
  margin: 0px auto;
  background-color: #6C799D; // cool grey
  position: absolute;
  left: 24px;
  bottom: -100px;
`;
