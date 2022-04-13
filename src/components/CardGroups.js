import React from "react";

// bootstrap
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function CardGroups(props) {
  const { img1, img2, img3, txt1, txt2, txt3, footer } = props;
  const style = {
    alignSelf: "center",
    backgroundColor: "#ccd7f6",
    color: "#253c78",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <CardGroup>
      <Card>
        <Card.Img variant='top' src={img1} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>1. Deaf Parent & Communication</Card.Title>
          <Card.Text>{txt1}</Card.Text>
          {footer ? (
            <Card.Footer className='mt-auto' style={style}>
              <div style={{ textAlign: "center" }}>This is coming soon</div>
            </Card.Footer>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src={img2} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>2. MBA & Finance</Card.Title>
          <Card.Text>{txt2}</Card.Text>
          {footer ? (
            <Card.Footer className='mt-auto' style={style}>
              <div style={{ textAlign: "center" }}>This is coming soon</div>
            </Card.Footer>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src={img3} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>3. Bootcamp Instructor</Card.Title>
          <Card.Text>{txt3}</Card.Text>
          {footer ? (
            <Card.Footer className='mt-auto' style={style}>
              <div style={{ textAlign: "center" }}>This is coming soon</div>
            </Card.Footer>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

// <CardGroup>
// <Card>
//   <Card.Img variant='top' src={bugtracker} />
//   <Card.Body className='d-flex flex-column'>
//     <Card.Title style={{ textAlign: "center" }}>Bug Tracker</Card.Title>

//     <Card.Text>
// Tracks reported software bugs, assigns tickets, and view admin or developer
// interfaces.
//     </Card.Text>
//     <Card.Footer
//       className='mt-auto'
//       style={{
//         alignSelf: "center",

//         backgroundColor: "#ccd7f6",
//         color: "#253c78",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ textAlign: "center" }}>This is coming soon</div>
//     </Card.Footer>
//   </Card.Body>
// </Card>
// <Card>
//   <Card.Img variant='top' src={budget} />
//   <Card.Body className='d-flex flex-column'>
//     <Card.Title style={{ textAlign: "center" }}>Financial Portal</Card.Title>
//     <Card.Text>
// A financial portal with user login for exploring careers, comparing college costs,
// and forming a social media sharable college funding plan.
//     </Card.Text>
//     <Card.Footer
//       className='mt-auto'
//       style={{
//         alignSelf: "center",
//         backgroundColor: "#ccd7f6",
//         color: "#253c78",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ textAlign: "center" }}>This is coming soon</div>
//     </Card.Footer>
//   </Card.Body>
// </Card>

// <Card>
//   <Card.Img variant='top' src={marketing} />
//   <Card.Body className='d-flex flex-column'>
//     <Card.Title style={{ textAlign: "center" }}>Marketing Website</Card.Title>
//     <Card.Text>
//       A shopping website that has user login, shows inventory from a database, and posts
//       customer reviews and ratings.
//     </Card.Text>
//     <Card.Footer
//       className='mt-auto'
//       style={{
//         alignSelf: "center",

//         backgroundColor: "#ccd7f6",
//         color: "#253c78",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ textAlign: "center" }}>This is coming soon</div>
//     </Card.Footer>
//   </Card.Body>
// </Card>
// </CardGroup>
