import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">IT-news</Navbar.Brand>
                <Nav className="flex-row m-auto gap-2">
                    <Nav.Link href="#home">Новости</Nav.Link>
                    <Nav.Link href="#features">В тренде</Nav.Link>
                </Nav>
                <Nav.Link className="text-white" href="#profile">Профиль</Nav.Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;