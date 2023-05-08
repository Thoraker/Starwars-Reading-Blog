import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css';
import ShowRoom from './ShowRoom';
import { useContext } from 'react';
import { AppContext } from '../routes/App';

const AccordionComponent = () => {
    const state = useContext(AppContext)

    const data = Object.keys(state.store)
        .filter((key) => !key.includes('Favoritos'))
        .reduce((object, key) => {
            return Object.assign(object, {
                [key]: state.store[key]
            });
        }, {});

    return (
        <Container fluid>
            <Accordion lg='5'>
                {
                    Object.entries(data).map((array, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={array[0]} >
                                <Accordion.Header>{array[0]}</Accordion.Header>
                                <Accordion.Body>
                                    <ShowRoom props={array[1]} />
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </Container >
    );
};

export default AccordionComponent;