import { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import MiniCard from './MiniCard';
import { AppContext } from '../routes/App';

const OffcanvasComponent = () => {
    const state = useContext(AppContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="btn btn-outline-danger position-relative" onClick={e => handleShow()}>
                <i className="bi bi-bookmark-heart" ></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.store.Favoritos.length}
                </span>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Lista de favoritos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        state.store.Favoritos === undefined
                            ? 'Aun no tienes favoritos'
                            : state.store.Favoritos.map((element) => { return <MiniCard key={element.name} element={element} state={state} /> })
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffcanvasComponent;

OffcanvasComponent.propTypes = {
    state: PropTypes.object,
    store: PropTypes.object,
    Favoritos: PropTypes.array,
};