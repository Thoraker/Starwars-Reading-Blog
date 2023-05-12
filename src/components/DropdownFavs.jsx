import { useContext } from 'react';
import PropTypes from 'prop-types';
import MiniCard from './MiniCard';
import { AppContext } from '../routes/App';
import { Dropdown } from 'react-bootstrap';

const DropdownFavs = () => {
    const state = useContext(AppContext)

    return (
        <>
            <Dropdown
                autoClose={false}
            >
                <Dropdown.Toggle
                    variant="danger"
                >
                    <i className="bi bi-heart" ></i>
                    <span className="position-absolute text-secondary top-0 start-100 translate-middle badge rounded-pill bg-light">
                        {state.store.Favoritos.length}
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    variant="dark"
                    align="end"
                >
                    {
                        state.store.Favoritos.length === 0
                            ? 'Aun no tienes favoritos'
                            : state.store.Favoritos.map((element) => {
                                return (
                                    <Dropdown.Item key={element.name}>
                                        <MiniCard key={element.name} props={element} />
                                    </Dropdown.Item>
                                )
                            })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DropdownFavs;

DropdownFavs.propTypes = {
    state: PropTypes.object,
    store: PropTypes.object,
    Favoritos: PropTypes.array,
};