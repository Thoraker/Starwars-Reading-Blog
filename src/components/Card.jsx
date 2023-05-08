import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types';

const CardsComponent = ({ props }) => {
    const [state] = useOutletContext()

    const url = props.imgUrl + props.uid + '.jpg'

    return (
        <div>
            <Card border="warning" bg='dark' text='warning'>
                <Card.Img variant="top"
                    src={url} alt={props.name}
                    className='p-2'
                    onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }}
                />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Leer Mas...
                    </Card.Text>
                    <Button variant="outline-secondary">Detalles</Button>
                    <Button variant="outline-danger" onClick={e => state.actions.handlerFavButton(props)} ><i className="bi bi-bookmark-heart" ></i></Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardsComponent

CardsComponent.propTypes = {
    props: PropTypes.object,
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    url: PropTypes.string,
    uid: PropTypes.string,
}