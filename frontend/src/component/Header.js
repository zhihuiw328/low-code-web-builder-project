import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const userLogin = JSON.parse(localStorage.getItem('userInfo'))

  const navigate  = useNavigate()
  const signoutHandler = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('templateStr')
    navigate('/')
  }

  const profileHandler = () => {
    navigate('/profile')
  }

  const templateHandler = () => {
    navigate('/template/'+ JSON.parse(localStorage.getItem('userInfo')).name)
  }

  return (
    <>
      <Navbar style={{backgroundColor:'#0c2852'}} fixed="top" >
      <Container>
        <Navbar.Brand className='ms-auto' href="/" style={{color: 'white'}}>Website Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="/" style={{color: 'white', fontSize: '80%'}}>Home</Nav.Link>
            <Nav.Link href="/template" style={{color: 'white', fontSize: '80%'}}>Template</Nav.Link>
            <Nav.Link href="/edit" style={{color: 'white', fontSize: '80%'}}> Edit</Nav.Link>
            
            {userLogin ? (
              <NavDropdown title={userLogin.name} id="basic-nav-dropdown" style={{color: 'white', fontSize: '60%'}}>
                <NavDropdown.Item onClick = {profileHandler}>User profile</NavDropdown.Item>
                <NavDropdown.Item onClick = {templateHandler}>My Templates</NavDropdown.Item>
                <NavDropdown.Item onClick = {signoutHandler}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login" style={{color: 'white', fontSize: '80%'}}><i className='fas fa-user'></i> Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}


export default Header
