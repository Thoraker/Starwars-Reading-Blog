import { useLoaderData } from "react-router-dom";
import AccordionComponent from "../components/Accordion";

const Home = () => {
    const data = useLoaderData()

    return (
        <>
            <AccordionComponent props={data} />
        </>
    );
};

export default Home;

export const dataHome = async () => {
    const responsePeople = await fetch('https://www.swapi.tech/api/people?page=1&limit=10')
    const dataPeople = await responsePeople.json()

    const responseVehicle = await fetch('https://www.swapi.tech/api/vehicles?page=1&limit=10')
    const dataVehicle = await responseVehicle.json()

    const responsePlanet = await fetch('https://www.swapi.tech/api/planets?page=1&limit=10')
    const dataPlanet = await responsePlanet.json()

    const sections = [
        { name: 'Personajes', results: dataPeople.results, imgUrl: 'https://starwars-visualguide.com/assets/img/characters/' },
        { name: 'Vehículos', results: dataVehicle.results, imgUrl: 'https://starwars-visualguide.com/assets/img/vehicles/' },
        { name: 'Planetas', results: dataPlanet.results, imgUrl: 'https://starwars-visualguide.com/assets/img/planets/' },
    ]

    return sections
}