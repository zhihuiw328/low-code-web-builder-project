import React, { useState } from 'react'
import './EditScreen.css';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import { Form, Button, Col, Row, Badge, Modal} from 'react-bootstrap'
import FormContainer from '../component/FormContainer';
import ControlledCarousel from '../component/Carousel/Carousel';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import Card from 'react-bootstrap/Card';



class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle : "12345",
      text : "USER INPUT TEXT",
      show: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      text : "ssssssseqws"
    }));
  }

  handleShow() {
    this.setState(state => ({
      show : true
    }));
  }

  handleClose() {
    this.setState(state => ({
      show : false
    }));
  }

  handleClear(event) {
    this.setState(state => ({
      text: ""
    }));
  }

  handleChange(event) {
    this.setState(state => ({
      text: event.target.value
    }));
    console.log(this.state.text)
  }

  render() {
    return (
      <>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your text below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="txt"
                placeholder={this.state.text}
                value={this.state.text}
                onChange={this.handleChange}
              />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClear}>
            Clear
          </Button>
          <Button variant="success" onClick={this.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>  
      <Container>
        <Row className='edit-button'>
        </Row>

        <Row>
          {/* Template */}
          <Col>
            <Card style={{ width: '50rem'}}>
              <BasicTemplate2 input={this.state.text}/>
            </Card>  
          </Col>

          {/* Buttons for editing */}
          <Col>
            <Row className='edit-button'>
              <Button variant="secondary">Edit Image DIV</Button>  
            </Row>
            <Row className='edit-button'>
              <Button variant="secondary" onClick={this.handleShow}>Edit Text block</Button>  
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
      </>
    )
  }
}

function InputText(props) {
  console.log("ss");
  const [userText, setUserText] = useState(props.text);
  setUserText("ssss");
  props.text = userText;
}

export default EditScreen