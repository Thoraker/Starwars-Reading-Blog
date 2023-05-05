import React, { useEffect, useState } from "react";
import getState from './Flux'

export const Context = React.createContext(null)

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: { ...state.actions },
                }),
            })
        );

        useEffect(() => {
            state.actions.loadInitialData()
        }, [])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;