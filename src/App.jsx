import { Outlet } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import NavbarComponent from './components/Navbar';
import getState from './resources/Flux';

export const AppContext = createContext(null);

const App = () => {
	const [state, setState] = useState(
		getState({
			getStore: () => state.store,
			getActions: () => state.actions,
			setStore: (updatedStore) =>
				setState({
					store: Object.assign(state.store, updatedStore),
					actions: { ...state.actions },
				}),
		})
	);

	useEffect(() => {
		state.actions.loadInitialData();
	}, []);

	return (
		<>
			<AppContext.Provider value={state}>
				<NavbarComponent />
				<Outlet />
			</AppContext.Provider>
		</>
	);
};

export default App;
