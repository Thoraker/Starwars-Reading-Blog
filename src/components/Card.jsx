import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CardsComponent(props) {
    console.log(props, 'props');
    return (
        <Card style={{ width: '15rem' }} bg='dark' text='muted'>
            <Card.Img variant="top" src={props.PhotoUrl + props.uid + '.jpg'} />
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
    PhotoUrl: PropTypes.string,
    uid: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
}