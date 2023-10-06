import './ExtendedCard.css';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../App';
import PropTypes from 'prop-types';

const ExtendedCard = ({ props }) => {
	console.log(props);
	const state = useContext(AppContext);
	const [show, setShow] = useState(false);

	const url = props.imgUrl + props.uid + '.jpg';

	const handlerButton = () => {
		state.actions.handlerDetailsButton(props);
		setShow(true);
	};

	const details = state.store.Detalles.data.properties;

	return (
		<>
			<Button
				variant='outline-secondary'
				onClick={() => handlerButton()}
			>
				Detalles
			</Button>

			<Modal
				contentClassName='bg-dark border-warning text-warning'
				show={show}
				onHide={() => setShow(false)}
				size='lg'
				aria-labelledby='example-custom-modal-styling-title'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-custom-modal-styling-title'>
						{props.name}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div
						className='card mb-3 h-5 bg-dark border-warning text-warning overflow-y-auto'
						id='extendedCard'
					>
						<div className='row g-0'>
							<div className='col-md-4'>
								<img
									src={url}
									className='img-fluid rounded-start'
									alt={state.store.Detalles.data.properties.name}
									onError={(e) => {
										e.target.src =
											'https://starwars-visualguide.com/assets/img/placeholder.jpg';
									}}
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-body '>
									<p className='card-text '>
										Descripción : {state.store.Detalles.data.description}
									</p>
									{Object.entries(details).map(([key, value]) => {
										return (
											<>
												<p className='card-text'>
													{key}: {value}
												</p>
											</>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ExtendedCard;

ExtendedCard.propTypes = {
	props: PropTypes.object,
	name: PropTypes.string,
	imgUrl: PropTypes.string,
	uid: PropTypes.string,
	actions: PropTypes.object,
};
