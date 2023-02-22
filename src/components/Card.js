import { forwardRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardComponent = forwardRef((props) => {
  return (
    <Card style={{ width: '10rem', maxHeight:'10rem', objectFit: 'cover', outline: 'bold' }}>
      <Card.Img variant="top" src={props.image_src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="btn btn-outline-dark me-2">Details</Button>
      </Card.Body>
    </Card>
  );
})

export default CardComponent;