import { useOutletContext } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";


const Vehículos = () => {
    const [state] = useOutletContext()
    const data = state.store.Vehículos

    return (
        <>
            <h1 className="text-warning">Vehículos</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Vehículos;
