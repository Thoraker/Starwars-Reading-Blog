import { useOutletContext } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";

const Planetas = () => {
    const [state] = useOutletContext()
    const data = state.store.Planetas

    return (
        <>
            <h1 className="text-warning">Planetas</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Planetas;
