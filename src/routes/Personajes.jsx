import { useOutletContext } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";

const Personajes = () => {
    const [state] = useOutletContext()
    const data = state.store.Personajes

    return (
        <>
            <h1 className="text-warning">Personajes</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Personajes;
