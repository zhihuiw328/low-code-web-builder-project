import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
      <Navbar style={{backgroundColor:'#0c2852'}}>
      <Container>
        <Navbar.Brand className='ms-auto' href="/" style={{color: 'white'}}>Website Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{color: 'white', fontSize: '60%'}}>Home</Nav.Link>
            <Nav.Link href="/template" style={{color: 'white', fontSize: '60%'}}>Template</Nav.Link>
            <Nav.Link href="/edit" style={{color: 'white', fontSize: '60%'}}> Edit</Nav.Link>
            <Nav.Link href="/login" style={{color: 'white', fontSize: '60%'}}><i className='fas fa-user'></i> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
