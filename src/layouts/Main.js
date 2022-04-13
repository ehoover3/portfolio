// css
import "../index.css";
import styled from "styled-components";
// components
import AnimateLetters from "../components/AnimateLetters";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import CardGroups from "../components/CardGroups";
import Home from "../components/Home";
// images/pdfs
import bank from "../assets/images/banking.png";
import budget from "../assets/images/budget.png";
import code from "../assets/images/coding.png";
import deaf from "../assets/images/deaf.png";
import bugtracker from "../assets/images/bugtracker.png";
import marketing from "../assets/images/marketing.png";
import Resume from "../assets/EricHooverResume.pdf";

export default function Main() {
  // variables
  let deafTxt =
    "With a deaf mother, communicating effectively is everything. From this, I pursue exploring code for accessibility, insightful UI/UX, and how I can better bridge information to people.";
  let bankTxt =
    "Student loan debt is a huge problem. I worked to help solve it for families by programming a college value calculator and one-click template emails. This impact sparked me into coding.";
  let codeTxt =
    "I teach full-stack software engineering with a focus in Javascript, CSS, React, Node, Express, MongoDB, and SQL. I continue to further my skills to build great websites and apps.";
  let bugTxt =
    "Tracks reported software bugs, assigns tickets, and view admin or developer interfaces.";
  let financeTxt =
    "A financial portal with user login for exploring careers, comparing college costs, and forming a social media sharable college funding plan.";
  let marketingTxt =
    "A shopping website that has user login, shows inventory from a database, and posts customer reviews and ratings.";

  // JSX SECTION
  return (
    <div>
      {/* HOME */}
      <Home />

      {/* ABOUT */}
      <About id='about' class='section'>
        <AnimateLetters words='ABOUT ME' />
        <CardGroups
          img1={deaf}
          img2={bank}
          img3={code}
          txt1={deafTxt}
          txt2={bankTxt}
          txt3={codeTxt}
        />
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Buttons href={Resume} txt={"Download Resumé"} />
        </div>
      </About>

      {/* PORTFOLIO */}
      <Portfolio id='portfolio'>
        <AnimateLetters words='PORTFOLIO' />
        <CardGroups
          img1={bugtracker}
          img2={budget}
          img3={marketing}
          txt1={bugTxt}
          txt2={financeTxt}
          txt3={marketingTxt}
          footer={true}
        />
      </Portfolio>

      {/* CONTACT */}
      <Contact id='contact'>
        <AnimateLetters words='CONTACT' />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            left: "-25px",
          }}
        >
          {/* <CardGroups img1={bugtracker} txt1={bugTxt} footer={true} /> */}
          <Cards />
        </div>
      </Contact>
    </div>
  );
}

const About = styled.div``;
const Portfolio = styled.div``;

const Contact = styled.div`
  padding: 0 0 0 50px;
  padding-bottom: 100px;
  background-color: #253c78; // dark cornflower blue

  h2 {
    position: relative;
    text-align: center;
    top: 3px;
    left: -25px;
    font-weight: 600;
    font-size: 4.2rem;
    color: #ccd7f6; // periwinkle crayola
  }

  // @media (max-width: 575px) {
  //   h2{color: red;}
  // }
`;
