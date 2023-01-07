import { Container } from "react-bootstrap";
import { Navbar, Nav, Form } from 'react-bootstrap';
import { House,Person,Bell,Messenger } from "react-bootstrap-icons";
import '../App.css'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Social Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Form>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Search User" />
                </Form.Group>
            </Form>
            <ul className="mt-2">
                <li><Nav.Link style={{display:"flex",flexDirection:"column",justifyContent:"center"}} href="#home"><House/>Home</Nav.Link></li>
                <li><Nav.Link style={{display:"flex",flexDirection:"column",justifyContent:"center"}} href="#friendReq"><Person/>Friend Requests</Nav.Link></li>
                <li><Nav.Link style={{display:"flex",flexDirection:"column",justifyContent:"center"}} href="#Messaging"><Messenger/>Message</Nav.Link></li>
                <li><Nav.Link style={{display:"flex",flexDirection:"column",justifyContent:"center"}} href="#Notification"><Bell/>Notification</Nav.Link></li>
            </ul>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default BasicExample;