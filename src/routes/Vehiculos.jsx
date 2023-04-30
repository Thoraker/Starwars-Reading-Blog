import { useEffect, useState } from "react";
import CardsComponent from "../components/Card";
import GetData from "../assets/Fetch";
import { Row, Stack } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const Vehículos = ({ props }) => {
    const [vehiclesData, setDataVehicles] = useState([])
    useEffect(() => {
        GetData(props)
            .then(data => setDataVehicles(data.results))
    }, [])

    const PhotoUrl = 'https://starwars-visualguide.com/assets/img/vehicles/'

    return (
        <>
            <h1 className="text-warning">Personajes</h1>
            <Stack direction="horizontal" gap={3}>
                <Row xs={1} md={3} className="g-4">
                    {
                        vehiclesData.map((vehicle, index) => {
                            return (
                                <CardsComponent key={index}
                                    uid={vehicle.uid}
                                    name={vehicle.name}
                                    url={vehicle.url}
                                    PhotoUrl={PhotoUrl}
                                />
                            )
                        })
                    }
                </Row>
            </Stack>
        </>
    );
};

export default Vehículos;

Vehículos.propTypes = {
    props: propTypes.object
}