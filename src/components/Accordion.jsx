import Accordion from 'react-bootstrap/Accordion';

const AccordionComponent = () => {

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personajes</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Vehículos</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Planetas</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
}

export default AccordionComponent;