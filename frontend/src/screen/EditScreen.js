import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import { Form, Button, Col, Row} from 'react-bootstrap'
import FormContainer from '../component/FormContainer';
import ControlledCarousel from '../component/Carousel/Carousel';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import Card from 'react-bootstrap/Card';

const EditScreen = () => {
  const [index, setIndex] = useState(0);
  const userInputForm = "inputinputinput"

  return (
    <Container fluid>
      <Row>
      <Col>
        <Card style={{ height: '28rem'}}>
        <BasicTemplate2 userInput={userInputForm}/>
        </Card>  
        </Col>
      <Col>
        <Row>
          s
        </Row>
        <Row>
          s2
        </Row>
      </Col>
      </Row>
    
        
    </Container>
  )
}

export default EditScreen