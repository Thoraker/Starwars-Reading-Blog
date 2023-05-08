import ShowRoom from "../components/ShowRoom";
import { useContext } from "react";
import { AppContext } from "./App";

const Planetas = () => {
    const state = useContext(AppContext)
    const data = state.store.Planetas

    return (
        <>
            <h1 className="text-warning">Planetas</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Planetas;
