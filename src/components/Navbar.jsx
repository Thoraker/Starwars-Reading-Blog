import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css'
import OffcanvasComponent from './Offcanvas';

const NavbarComponent = () => {
    const styleLinksTo = {
        maxHeight: '200px',
        textDecoration: 'none',
        margin: '10px',
        text: 'yellow'
    }

    const styleImg = {
        height: '3rem',
        width: 'auto'
    }

    return (
        <Navbar
            bg='dark'
            expand='lg'
            variant='dark'
        >
            <Container fluid >
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Link to='/' style={styleLinksTo} className='text-warning'><img src='/src/img/StarWarsLogo.svg' style={styleImg} /></Link>
                <Navbar.Brand><h1 className='text-warning px-3 fs-3'>Starwars Blog</h1></Navbar.Brand>
                <Nav
                    className='me-auto my-2 my-lg-0'
                    navbarScroll
                >
                    <NavDropdown
                        title="Secciones "
                        bsPrefix='text-warning text-decoration-none fs-6'
                        menuVariant="dark"
                    >
                        <li><Link to='people' style={styleLinksTo} className='text-warning'>Personajes</Link></li>
                        <li><Link to='vehicles' style={styleLinksTo} className='text-warning'>Vehículos</Link></li>
                        <li><Link to='planets' style={styleLinksTo} className='text-warning'>Planetas</Link></li>
                    </NavDropdown>
                </Nav>

                <Form className='d-flex me-2'>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        className='me-2'
                        aria-label='Search'
                    />
                    <Button variant='outline-warning'
                    >Search</Button>
                </Form>
                <OffcanvasComponent />
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
