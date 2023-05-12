import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Button, Card } from "react-bootstrap";
import { AppContext } from '../routes/App';
import ExtendedCard from './ExtendedCard';


const MiniCard = ({ props }) => {
    const state = useContext(AppContext)

    return (
        <Card style={{ width: '20rem' }} border="warning" bg='dark' text='warning'>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Leer Mas...
                </Card.Text>
                <ExtendedCard props={props} />
                <Button
                    variant="outline-danger"
                    onClick={() => state.actions.handlerFavButton(props)}
                >
                    <i className="bi bi-heart" ></i>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MiniCard;

MiniCard.propTypes = {
    props: PropTypes.object,
    actions: PropTypes.object,
    name: PropTypes.string
};