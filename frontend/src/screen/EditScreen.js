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
      text : "",
      showImage: false,
      showText: false,
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleShowHideText = this.handleShowHideText.bind(this);
    this.handleHideText = this.handleHideText.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClearText = this.handleClearText.bind(this);

    this.handleShowImage = this.handleShowImage.bind(this);
    this.handleCloseImage = this.handleCloseImage.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      text : "ssssssseqws"
    }));
  }


  handleShowImage() {
    this.setState(state => ({
      showImage : true
    }));
  }

  handleUploadImage() {
    // this.setState(state => ({
    //   showImage : true
    // }));
    console.log("upload")
  }

  handleCloseImage() {
    this.setState(state => ({
      showImage : false
    }));
  }


  handleClearText(event) {
    this.setState(state => ({
      text: ""
    }));
  }

  handleHideText(event) {
    this.setState(state => ({
      showText : false
    }));
  }

  handleShowHideText(event) {
    this.setState(state => ({
      showText : !this.state.showText
    }));
  }

  handleChangeText(event) {
    this.setState(state => ({
      text: event.target.value
    }));
  }

  render() {
    return (
      <>
      <Modal show={this.state.showImage} onHide={this.handleCloseImage}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* TODO */}
          <Form.Control
                  label='Choose File'
                  type="file"
                  placeholder={"Input Text Here"}
                  value={this.state.text}
                  onChange={this.handleUploadImage}
                />
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.handleCloseImage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>  

      <Container>
        <Row className='space'>
        </Row>

        <Row>
          {/* Template */}
          <Col>
            <Card style={{width: '50rem'}}>
              <BasicTemplate2 
              updateParentCallback={(update)=>
                this.setState(state => ({text: update}))}
               input={this.state.text}/>
     
            </Card>  
          </Col>

          {/* Buttons for editing */}
          <Col>
            <Row className='edit-button'>
              <Button variant="secondary" onClick={this.handleShowImage}>Edit Image DIV</Button>  
            </Row>


            <Row className='edit-button'>
              <Button variant="secondary" onClick={this.handleShowHideText}>Edit Text block</Button>  
              { this.state.showText
                    
              ? <Card className='input-text'>
              <Form onSubmit={this.handleSubmit} show={this.state.show} onHide={this.handleClose}>
                <Form.Control
                  type="txt"
                  placeholder={"Input Text Here"}
                  value={this.state.text}
                  onChange={this.handleChangeText}
                />
              </Form>
              <Modal.Footer>
                <Button variant="danger" onClick={this.handleClearText}>
                  Clear
                </Button>
                <Button variant="success" onClick={this.handleShowHideText}>
                  Submit
                </Button>
              </Modal.Footer>
              </Card>
              
              : null
          }
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