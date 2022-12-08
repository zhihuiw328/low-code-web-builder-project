import React, { useState } from 'react'
import './EditScreen.css';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link, redirect } from 'react-router-dom'
import { Form, Button, Col, Row, Badge, Modal} from 'react-bootstrap'
import FormContainer from '../component/FormContainer';
import ControlledCarousel from '../component/Carousel/Carousel';
import BasicTemplate1 from '../component/templates/BasicTemplate1';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import Card from 'react-bootstrap/Card';
import * as ReactDOMServer from 'react-dom/server';



class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle : "12345",
      text : "",
      showImage: false,
      showText: false,
      color: "black",
      backgroundColor: "white"
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleShowHideText = this.handleShowHideText.bind(this);
    this.handleHideText = this.handleHideText.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClearText = this.handleClearText.bind(this);

    this.handleShowImage = this.handleShowImage.bind(this);
    this.handleCloseImage = this.handleCloseImage.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);

    this.handleExport = this.handleExport.bind(this);
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

  handleExport() {
    // console.log(ReactDOMServer.renderToString(templatePart))
    /* {TODO: Need backend first */
  }
  

  render() {
    var templatePart = 
      <BasicTemplate2 
        updateText={(update)=>this.setState(state => ({text: update}))}
        text={this.state.text}

        updateColor={(update)=>this.setState(state => ({color: update}))}
        color ={this.state.color}

        updateBackgroundColor={(update)=>this.setState(state => ({backgroundColor: update}))}
        backgroundColor ={this.state.backgroundColor}
        />
    return (
      <>
      <Modal show={this.state.showImage} onHide={this.handleCloseImage}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* TODO: Need to post this part in server, do later*/}
          <Form.Control
              label='Choose File'
              type="file"
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
              {templatePart}
            </Card>  
          </Col>

          {/* Buttons for editing */}
          <Col>
            <Row className='space'>
            </Row>

            <Row className='edit-button'>
              <Button variant="secondary" onClick={this.handleShowImage}>Edit Image DIV</Button>  
            </Row>


            <Row className='edit-button'>
              <Button variant="secondary" onClick={this.handleShowHideText}>Edit Text Block</Button>  
              { this.state.showText

              ? <Card className='input-text'>
              <Form onSubmit={this.handleSubmit} show={this.state.show}>
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
                  Return
                </Button>
              </Modal.Footer>
              </Card>
              
              : null
          }
            </Row>

            <Row className='edit-button'>
              <Button variant="secondary">Edit Color</Button>  
            </Row>
            <Row className='edit-button'>
            </Row>

            {/* Return buttons */}
            <Row>
              <Col md={{ span: 4, offset: 2 }}>
                <Link to="/"><Button variant="primary">Return Home</Button></Link>
              </Col>
              <Col md={{ span: 5}}>
              <Link to="/Template"><Button variant="primary">Return Template</Button></Link>
              </Col>
            </Row>

          </Col>
        </Row>

        <Row className='edit-button'>
        </Row>

        <Row  className="justify-content-md-center">
          <Button variant="primary" style={{ width: '60rem'}} onClick={()=>console.log(ReactDOMServer.renderToString(templatePart))}>Export Model as HTML/CSS</Button>  
        </Row>

        <Row className='edit-button'>
        </Row>
          
      </Container>
      </>
    )
  }
}

export default EditScreen