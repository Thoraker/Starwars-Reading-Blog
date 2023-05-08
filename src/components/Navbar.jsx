import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css'
import OffcanvasComponent from './Offcanvas';
import PropTypes from 'prop-types'

const NavbarComponent = ({ state }) => {

    const styleLinksTo = {
        maxHeight: '200px',
        textDecoration: 'none',
        margin: '10px',
        text: 'yellow'
    }

    const styleImg = {
        height: '7rem',
        width: 'auto'
    }

    return (
        <Navbar
            expand='lg'
            variant='dark'
        >
            <Container fluid >
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Link to='/' style={styleLinksTo} className='text-warning'><h1 className='text-warning px-3'>Starwars Blog</h1></Link>
                <Nav
                    className='my-lg-0'
                    navbarScroll
                >
                    <NavDropdown
                        title="Secciones "
                        bsPrefix='text-warning text-decoration-none fs-6'
                        menuVariant="dark"
                    >
                        <NavDropdown.Item><Link to='people' style={styleLinksTo} className='text-warning'>Personajes</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='vehicles' style={styleLinksTo} className='text-warning'>Vehículos</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='planets' style={styleLinksTo} className='text-warning'>Planetas</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Link to='/' style={styleLinksTo} className='text-warning mx-auto d-block'><img src='/src/img/StarWarsLogo.svg' style={styleImg} /></Link>
                <Form className='d-flex me-2'>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        className='mx-2'
                        aria-label='Search'
                    />
                    <Button variant='outline-warning'
                        className='mx-2'
                    >Search</Button>
                    <OffcanvasComponent state={state} />
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;

NavbarComponent.propTypes = {
    state: PropTypes.object
}
