import { useLoaderData } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";

const allPlanetsUrl = 'https://www.swapi.tech/api/planets?page=1&limit=100'

const Planetas = () => {
    const data = useLoaderData()

    return (
        <>
            <h1 className="text-warning">Planetas</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Planetas;

export const planetsLoader = async () => {
    const response = await fetch(allPlanetsUrl)
    const responseJson = await response.json()
    const data = { name: 'Personajes', results: responseJson.results, imgUrl: 'https://starwars-visualguide.com/assets/img/planets/' }
    return data
}