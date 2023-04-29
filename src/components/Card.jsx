import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CardsComponent({ PhotoUrl, uid, name, url }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={PhotoUrl + uid + '.jpg'} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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