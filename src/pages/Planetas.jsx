import { useContext } from 'react';
import { AppContext } from '../App';

import ShowRoom from '../components/ShowRoom';

const Planetas = () => {
	const state = useContext(AppContext);
	const data = state.store.Planetas;

	return (
		<>
			<h1 className='text-warning'>Planetas</h1>
			<ShowRoom props={data} />
		</>
	);
};

export default Planetas;
