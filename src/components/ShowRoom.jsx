import { Container, Row } from "react-bootstrap";
import CardsComponent from "./Card";
import PropTypes from 'prop-types';


const ShowRoom = ({ props }) => {

    return (
        <Container fluid>
            <Row xs={1} sm={3} lg={5} className="g-4">
                {
                    props.data ? props.data.map((object) => {
                        object.imgUrl = props.imgUrl
                        return (
                            <CardsComponent key={object.name} props={object} />
                        )
                    }) : null
                }
            </Row>
        </Container>
    );
};

export default ShowRoom;

ShowRoom.propTypes = {
    props: PropTypes.object,
    data: PropTypes.array,
    imgUrl: PropTypes.string,
};