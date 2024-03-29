import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function EducationBox(props: any) {
  return (
    <Col className='education-box' lg={4} sm={6}>
      <a href='#' style={{ textDecoration: "none" }}>
        <Card className='text-center'>
          <div className='m-auto education-card-img'>
            <Card.Img variant='top' src={props.img} className='education-img' />
          </div>
          <Card.Body className='education-card-text'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

export default EducationBox;
