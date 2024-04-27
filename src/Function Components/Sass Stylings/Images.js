import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styling react.css"
import Spinner from 'react-bootstrap/Spinner';


function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" height={200}/>
        <Card.Body>
          <Card.Title>Mens Casual Slim Fit</Card.Title>
          <Card.Text>
          The color could be slightly different between on the screen and in practice.
          </Card.Text>
          <Button variant="primary">Go somewhere<Spinner animation="border" variant="danger" size='sm'/></Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" height={200}/>
        <Card.Body>
          <Card.Title>Mens Cotton Jacket",</Card.Title>
          <Card.Text>
          great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions
          </Card.Text>
          <Button variant="primary">Go somewhere<Spinner animation="border" variant="info" size='sm'/></Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" height={200}/>
        <Card.Body>
          <Card.Title>Slim Fit T-Shirts</Card.Title>
          <Card.Text>
          Slim-fitting style, contrast raglan long sleeve, three-button henley placket
          </Card.Text>
          <Button variant="primary">Go somewhere<Spinner animation="grow" variant="danger" size='sm'/></Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default CardExample;