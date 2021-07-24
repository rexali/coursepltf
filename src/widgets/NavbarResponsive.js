import { useState } from "react";
import { Offcanvas } from 'react-bootstrap';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Sidebar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* you can use this <Button variant="primary" onClick={handleShow}>Launch</Button> to replace the span element */}
      <span className='d-md-none' onClick={handleShow}>Menu</span>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

const NavbarResponsive = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
    <Container>
       {/*You can replace this <Sidebar/> element with <Navbar.Toggle aria-controls="responsive-navbar-nav" ><Sidebar /></Navbar.Toggle> */}
      <Sidebar />
      <Navbar.Brand href="#home">Coursecity</Navbar.Brand>
      <Navbar.Brand href="#home" className='d-md-none'>Call</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#deets">More</Nav.Link>
          <Nav.Link eventKey={1} href="#memes">Logout</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Action4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More</Nav.Link>
          <Nav.Link eventKey={2} href="#memes" >Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarResponsive;