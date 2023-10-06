import PropTypes from 'prop-types';
import MiniCard from './MiniCard';
import { AppContext } from '../App';
import { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropDownComponent = () => {
	const state = useContext(AppContext);
	return (
		<>
			<DropdownButton
				variant='danger'
				align='end'
				title='Favoritos'
				id='dropdown-menu-align-end'
				autoClose={false}
			>
				{state.store.Favoritos.length === 0
					? 'Aun no tienes Favoritos'
					: state.store.Favoritos.map((element) => {
							return (
								<Dropdown.Item key={element.name}>
									<MiniCard
										key={element.name}
										element={element}
										state={state}
									/>
								</Dropdown.Item>
							);
					  })}
			</DropdownButton>
		</>
	);
};

export default DropDownComponent;

DropDownComponent.propTypes = {
	state: PropTypes.object,
	store: PropTypes.object,
	Favoritos: PropTypes.array,
};
