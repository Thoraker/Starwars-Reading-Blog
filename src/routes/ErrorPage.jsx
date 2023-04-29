import { useRouteError } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <Card bg='dark' className="text-center text-warning w-50 mx-auto mt-5">
            <Card.Header>Informe de daños</Card.Header>
            <Card.Body>
                <Card.Title>Tengo un mal presentimiento sobre esto. <br />
                    Roooarrgh ur roo.</Card.Title>
                <Card.Text>
                    Disculpen por las molestias causadas. <br />
                    Grrrrraaaarrrrr.
                </Card.Text>
                <Button variant="outline-warning" href='/'>Ir al Inicio</Button>
            </Card.Body>
            <Card.Footer>{error.statusText || error.message}</Card.Footer>
        </Card>
    );
};

export default ErrorPage;
