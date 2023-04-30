import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { propTypes } from "react-bootstrap/esm/Image";

function CardsComponent(props) {
    return (
        <Card style={{ width: '15rem' }} bg='dark' text='muted'>
            <img src={props.PhotoUrl + props.uid + '.jpg'} className='card-img-top' alt={props.name} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Leer Mas...
                </Card.Text>
                <Button variant="outline-secondary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardsComponent;

CardsComponent.propTypes = {
    PhotoUrl: propTypes.string,
    uid: propTypes.string,
    name: propTypes.string,
    url: propTypes.string
}