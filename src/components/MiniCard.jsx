import { Button, Card } from "react-bootstrap"

const MiniCard = ({ props }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Leer Mas...
                </Card.Text>
                <Button variant="outline-secondary">Detalles</Button>
                <Button variant="outline-danger"><i className="bi bi-bookmark-heart" ></i></Button>
            </Card.Body>
        </Card>
    )
}

export default MiniCard