import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
    const element =
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/home">TechStuff</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/products' className='px-5'>Product List</Nav.Link>
                        <Nav.Link as={Link} to='/add' className='px-3'>Add Product</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    return element;
}

export default Header;
