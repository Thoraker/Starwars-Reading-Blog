import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent() {
    const sections = ['people', 'planets', 'vehicles']

    const dataSections = async (array) => {
        array.map()

        const url = `https://www.swapi.tech/api/${prop}?page=1&limit=100`
    }

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