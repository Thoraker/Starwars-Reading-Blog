import './App.css';
import NavbarComponent from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getState from '../resources/Flux';

const App = () => {
    const [state, setState] = useState(
        getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) => setState({
                store: Object.assign(state.store, updatedStore),
                actions: { ...state.actions },
            }),
        })
    )

    useEffect(() => {
        state.actions.loadInitialData()
    }, [])

    return (
        <>
            <NavbarComponent props={state} />
            <Outlet context={[state, setState]} />
        </>
    );
};

export default App;
