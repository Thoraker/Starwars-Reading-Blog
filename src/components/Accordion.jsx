import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ShowRoom from './ShowRoom';
import './Accordion.css';

const AccordionComponent = ({ props }) => {
    console.log(props);

    return (
        <Container fluid>
            <Accordion lg='5'>
                {
                    props.map((object, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>{object.name}</Accordion.Header>
                                <Accordion.Body>
                                    <ShowRoom props={object} />
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
            </Accordion>
        </Container >
    );
}

export default AccordionComponent;
