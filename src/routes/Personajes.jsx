import { useLoaderData } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";

const allPeopleUrl = 'https://www.swapi.tech/api/people?page=1&limit=100'

const Personajes = () => {
    const data = useLoaderData()

    return (
        <>
            <h1 className="text-warning">Personajes</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Personajes;

export const peopleLoader = async () => {
    const response = await fetch(allPeopleUrl)
    const responseJson = await response.json()
    const data = { name: 'Personajes', results: responseJson.results, imgUrl: 'https://starwars-visualguide.com/assets/img/characters/' }
    return data
}
