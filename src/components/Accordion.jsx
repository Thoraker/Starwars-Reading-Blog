import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { propTypes } from 'react-bootstrap/esm/Image';
import People from '../routes/People';

const AccordionComponent = ({ props }) => {
    console.log(props);

    return (
        <Container fluid>
            <Accordion>
                {
                    props.map((object, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>{object.name}</Accordion.Header>
                                <Accordion.Body>
                                    <People props={object.url} />
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
            </Accordion>
        </Container >
    );
}

export default AccordionComponent;

AccordionComponent.propTypes = {
    props: propTypes.array
}