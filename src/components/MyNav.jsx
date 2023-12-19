import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNav = (props) => {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container fluid>
                <Navbar.Brand href='#menu'>{props.brand}</Navbar.Brand>
                <Nav className='me-auto d-flex flex-row'>
                    <Nav.Link href='#home'>{props.home}</Nav.Link>
                    <Nav.Link href='#about'>{props.about}</Nav.Link>
                    <Nav.Link href='#browse'>{props.browse}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNav;