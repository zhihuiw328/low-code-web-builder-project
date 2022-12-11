import React, {useState , useEffect} from 'react';
import './TemplateList.css';
import Image from 'react-bootstrap/Image'
import { Form, Button, Row, Col,Modal } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios'

const TemplateList = (props) =>{
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate()
  const userLogin = localStorage.getItem('userInfo')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [template, setTemplate] = useState('');

  const submitHandler = async(e) => {
    e.preventDefault()
    const config = {
      headers: {
          'Content-Type': 'application/json',
      }
    }
    const { data } = await axios.post('/api/users/login', {email, password}, config)
    localStorage.setItem('userInfo', JSON.stringify(data))
    setShowLogin(false);
    navigate('/edit');
    

  }


  const HandleClick = (event, message) =>{
    setTemplate(message)
    if(!userLogin){
      setShowLogin(true);
    } else {
      navigate('/edit');
    }
    

  }

  const handleCloseLogin = () => {
    setShowLogin(false);
  }

    return (
     <>
     {/* Save modal */}
     <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button className='my-3' type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer? 
          <Link className='mx-3' to='/register'>Register</Link>
        </Col>
      </Row>
        </Modal.Body>
        <Modal.Footer>          
        </Modal.Footer>
      </Modal>  
      {/* save */}
      {props.templates?.map((template, index) => (
        <div className='image-container m-3'>
         <div style = {{padding:20, fontSize:20, float:'left', margin: 'auto', height:500, width:400}}>
         <Image src={require("./template_image/" + template.image_path)} width="300" height="400" onClick={(event) => HandleClick(event, template.template_name)}>
          </Image>
         </div>
        </div>
       ))}
     </>
    );
   };
   
   export default TemplateList;