import { Container, Row } from "react-bootstrap"
import CardsComponent from "./Card"

const ShowRoom = ({ props }) => {
    return (
        <Container fluid>
            <Row xs={1} sm={3} lg={5} className="g-4">
                {
                    props.results.map((element, index) => {
                        return (
                            <CardsComponent key={index}
                                uid={element.uid}
                                name={element.name}
                                url={element.url}
                                imgUrl={props.imgUrl}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default ShowRoom