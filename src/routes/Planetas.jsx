import { useEffect, useState } from "react";
import GetData from "../assets/Fetch";
import CardsComponent from "../components/Card";
import { Row, Stack } from "react-bootstrap";

const Planetas = () => {
    const planetsUrl = 'https://www.swapi.tech/api/planets?page=1&limit=100'

    const [planetsData, setDataVehicles] = useState([])
    useEffect(() => {
        GetData(planetsUrl)
            .then(data => setDataVehicles(data.results))
    }, [])

    const PhotoUrl = 'https://starwars-visualguide.com/assets/img/planets/'

    return (
        <>
            <h1 className="text-warning">Personajes</h1>
            <Stack direction="horizontal" gap={3}>
                <Row xs={1} md={3} className="g-4">
                    {
                        planetsData.map((vehicle, index) => {
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

export default Planetas;
