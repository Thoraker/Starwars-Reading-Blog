import AccordionComponent from "../components/Accordion";
import { propTypes } from "react-bootstrap/esm/Image";

const Home = ({ props }) => {
    return (
        <>
            <AccordionComponent props={props} />
        </>
    );
};

export default Home;

Home.propTypes = {
    props: propTypes.array
}