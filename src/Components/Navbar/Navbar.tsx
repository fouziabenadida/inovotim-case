import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'


function NavBar() {
  return (
    <Navbar bg="#FFFFFF" expand="lg">
      <Container>
        <Navbar.Brand ><img width={100}  height={20} className="logo-left" src="./assets/logo.png" /></Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home">ANASAYFA</Nav.Link>
            <Nav.Link href="#link">CHAT</Nav.Link>
            <Nav.Link href="#link">PUANLAR</Nav.Link>
            <Nav.Link href="#link">SINIFIM</Nav.Link>
            <Nav.Link href="#link">EĞITIM</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
        <img className='burger' src="./assets/burger-menu.jpg"  />
        <img className='logo-right'   src="./assets/right-logo.png"  />
      </Container>
    </Navbar>
  );
}

export default NavBar;