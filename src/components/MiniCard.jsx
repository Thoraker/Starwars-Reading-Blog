import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import getState from '../resources/Flux';

const MiniCard = ({ element }, { state }) => {

    const handlerFavButton = () => {
        const storeCopy = state.store;
        storeCopy.Favoritos.some((element) => element.name === data.name)
            ? setStore({
                Favoritos: storeCopy.Favoritos.filter(
                    (element) => element.name !== data.name
                ),
            })
            : setStore({ Favoritos: [...storeCopy.Favoritos, data] })
    };
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>
                    Leer Mas...
                </Card.Text>
                <Button variant="outline-secondary">Detalles</Button>
                <Button variant="outline-danger" onClick={handlerFavButton(element)}><i className="bi bi-bookmark-heart" ></i></Button>
            </Card.Body>
        </Card>
    );
};

export default MiniCard;

MiniCard.propTypes = {
    element: PropTypes.object,
    actions: PropTypes.object,
};