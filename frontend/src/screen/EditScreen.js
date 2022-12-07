import React, { useState } from 'react'
import './EditScreen.css';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import { Form, Button, Col, Row, Badge} from 'react-bootstrap'
import FormContainer from '../component/FormContainer';
import ControlledCarousel from '../component/Carousel/Carousel';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import Card from 'react-bootstrap/Card';

const EditScreen = () => {
  const [index, setIndex] = useState(0);
  const userInputForm = {
    pageTitle : "12345",
    text : "USER INPUT TEXT",
  }

  return (
    <Container>
      <Row className='edit-button'>
      </Row>
      
      <Row>
        {/* Template */}
        <Col>
          <Card style={{ width: '50rem'}}>
            <BasicTemplate2 userInput={userInputForm}/>
          </Card>  
        </Col>

        {/* Buttons for editing */}
        <Col>
          <Row className='edit-button'>
            <Button variant="secondary">Edit Image DIV</Button>  
          </Row>
          <Row className='edit-button'>
            <Button variant="secondary">Edit Text block</Button>  
          </Row>
          <Row className='edit-button'>
            <Button variant="secondary">Button</Button>  
          </Row>
          <Row className='edit-button'>
          </Row>

          {/* Return buttons */}
          <Row>
            <Col md={{ span: 4, offset: 3 }}>
              <Button variant="primary">Return Home</Button>  
            </Col>
            <Col md={{ span: 5}}>
              <Button variant="primary">Return Template</Button>  
            </Col>
          </Row>

        </Col>
      </Row>

      <Row className='edit-button'>
      </Row>

      <Row  className="justify-content-md-center">
        <Button variant="primary"style={{ width: '60rem'}}>Export model as HTML/CSS</Button>  
      </Row>
    
      <Row className='edit-button'>
      </Row>
        
    </Container>
  )
}

export default EditScreen