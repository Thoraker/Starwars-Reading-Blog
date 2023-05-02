import { useLoaderData } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";

const allVehiclesUrl = 'https://www.swapi.tech/api/vehicles?page=1&limit=100'

const Vehículos = () => {
    const data = useLoaderData()

    return (
        <>
            <h1 className="text-warning">Vehículos</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Vehículos;

export const vehiclesLoader = async () => {
    const response = await fetch(allVehiclesUrl)
    const responseJson = await response.json()
    const data = { name: 'Personajes', results: responseJson.results, imgUrl: 'https://starwars-visualguide.com/assets/img/vehicles/' }
    return data
}