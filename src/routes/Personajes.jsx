import ShowRoom from "../components/ShowRoom";
import { useContext } from "react";
import { AppContext } from "./App";

const Personajes = () => {
    const state = useContext(AppContext)
    const data = state.store.Personajes

    return (
        <>
            <h1 className="text-warning">Personajes</h1>
            <ShowRoom props={data} />
        </>
    );
};

export default Personajes;
