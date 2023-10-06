import { useContext } from 'react';
import { AppContext } from '../App';

import ShowRoom from '../components/ShowRoom';

const Vehículos = () => {
	const state = useContext(AppContext);
	const data = state.store.Vehículos;

	return (
		<>
			<h1 className='text-warning'>Vehículos</h1>
			<ShowRoom props={data} />
		</>
	);
};

export default Vehículos;
