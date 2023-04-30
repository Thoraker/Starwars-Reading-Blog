import { useEffect, useState } from "react";
import GetData from "../assets/Fetch";
import CardsComponent from "../components/Card";
import { Row, Stack } from "react-bootstrap";

const People = () => {
    const PeopleUrl = 'https://www.swapi.tech/api/people?page=1&limit=100'

    const [peopleData, setDataVehicles] = useState([])
    useEffect(() => {
        GetData(PeopleUrl)
            .then(data => setDataVehicles(data.results))
    }, [])

    const PhotoUrl = 'https://starwars-visualguide.com/assets/img/characters/'

    return (
        <>
            <h1 className="text-warning">Personajes</h1>
            <Stack direction="horizontal" gap={3}>
                <Row xs={1} md={3} className="g-4">
                    {
                        peopleData.map((vehicle, index) => {
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
            </Stack >
        </>
    );
};

export default People;
