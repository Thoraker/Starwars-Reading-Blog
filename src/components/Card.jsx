import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form, useLoaderData } from 'react-router-dom';

export const addFavButton = async (element) => {
    const initialFavList = useLoaderData()
    const newFavList = [...initialFavList + element]
    return newFavList
}

const CardsComponent = (props) => {
    console.log('buttons', props);
    return (
        <div>
            <Card border="warning" bg='dark' text='warning'>
                <Card.Img variant="top"
                    src={props.imgUrl + props.uid + '.jpg'} alt={props.name}
                    className='p-2'
                    onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }}
                />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Leer Mas...
                    </Card.Text>
                    <Button variant="outline-secondary">Detalles</Button>
                    <Form method="post" action='addFavButton'>
                        <Button variant="outline-danger"><i className="bi bi-bookmark-heart"></i></Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardsComponent;

