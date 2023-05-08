import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Button, Card } from "react-bootstrap";
import { AppContext } from '../routes/App';


const MiniCard = ({ element }) => {
    const state = useContext(AppContext)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>
                    Leer Mas...
                </Card.Text>
                <Button variant="outline-secondary">Detalles</Button>
                <Button variant="outline-danger" onClick={() => state.actions.handlerFavButton(element)}><i className="bi bi-bookmark-heart" ></i></Button>
            </Card.Body>
        </Card>
    );
};

export default MiniCard;

MiniCard.propTypes = {
    element: PropTypes.object,
    actions: PropTypes.object,
};