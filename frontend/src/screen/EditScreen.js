import React, { useState } from 'react'
import './EditScreen.css';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link, redirect } from 'react-router-dom'
import { Form, Button, Col, Row, Badge, Modal, Dropdown} from 'react-bootstrap'
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
      pageTitle : '12345',
      text : '',
      showImage: false,
      showText: false,
      showColor: false,
      showFont: false,
      save: false,

      color: 'black',
      backgroundColor: 'white',

      fontSize: 1,
      fontStyle: "bold",
      font:"times",

      template: "",
      name:""
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleShowHideText = this.handleShowHideText.bind(this);
    this.handleHideText = this.handleHideText.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClearText = this.handleClearText.bind(this);

    this.handleShowImage = this.handleShowImage.bind(this);
    this.handleCloseImage = this.handleCloseImage.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);

    this.handleShowHideColor = this.handleShowHideColor.bind(this);

    this.handleShowHideFont = this.handleShowHideFont.bind(this);

    this.handleExport = this.handleExport.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      text : 'ssssssseqws'
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
    console.log('upload')
  }
  handleCloseImage() {
    this.setState(state => ({
      showImage : false
    }));
  }


  handleClearText(event) {
    this.setState(state => ({
      text: ''
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

  handleShowHideColor(event) {
    this.setState(state => ({
      showColor : !this.state.showColor
    }));
  }

  handleShowHideFont(event) {
    this.setState(state => ({
      showFont : !this.state.showFont
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

        updatefont={(update)=>this.setState(state => ({font: update}))}
        font ={this.state.font}
        
        updatefontSize={(update)=>this.setState(state => ({fontSize: update}))}
        fontSize ={this.state.fontSize}

        updatefontStyle={(update)=>this.setState(state => ({fontStyle: update}))}
        fontStyle ={this.state.fontStyle}
        />
    return (
      <>
      {/* save here */}
      <Modal show={this.state.save} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your name</Modal.Title>
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
      {/* save */}


      <Modal show={this.state.showImage} onHide={this.handleCloseImage}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* TODO: Need to post this part in server, do later*/}
          <Form.Control
            label='Choose File'
            type='file'
            onChange={this.handleUploadImage}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={this.handleCloseImage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>  

      <Container fluid="md">
        <Row className='space'>
        </Row>

        <Row>
          {/* Template */}
          <Col>
            <Card className='preview' border="dark">
              {templatePart}
            </Card>  
          </Col>

          {/* Buttons for editing */}
          <Col>
            <Row className='space'>
            </Row>

            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowImage}>Upload Image</Button>  
            </Row>

            {/* Text edit */}
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowHideText}>Edit Text Block</Button>  
              { this.state.showText

              ? <Card className='input-text'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Control
                  type='txt'
                  placeholder={'Input Text Here'}
                  value={this.state.text}
                  onChange={this.handleChangeText}
                  />
              </Form>
              <Modal.Footer>
                <Button variant='danger' onClick={this.handleClearText}>
                  Clear
                </Button>
                <Button variant='success' onClick={this.handleShowHideText}>
                  Return
                </Button>
              </Modal.Footer>
              </Card>
              
              : null
            }
            </Row>

            {/* Color selection */}
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowHideColor}>Edit Color</Button>  
            </Row>
    
            {
              this.state.showColor
              ? <Row>
                <Col>
                <Dropdown className="dropdown-box">
                    <Dropdown.Toggle style={{color: this.state.backgroundColor ==="white" ?"black":"white",  background: this.state.backgroundColor}} >
                      Background Color
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"black"})} active={this.state.backgroundColor === "black"}>Black</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"white"})} active={this.state.backgroundColor === "white"}>White</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"red"})} active={this.state.backgroundColor === "red"}>Red</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"orange"})} active={this.state.backgroundColor === "orange"}>Orange</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"pink"})} active={this.state.backgroundColor === "pink"}>Pink</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"blue"})} active={this.state.backgroundColor === "blue"}>Blue</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                  <Col>
                  <Dropdown className="dropdown-box">
                    <Dropdown.Toggle style={{color: this.state.color ==="white" ?"black":"white", background: this.state.color}} >
                      Text Color
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({color:"black"})} active={this.state.color === "black"}>Black</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"white"})} active={this.state.color === "white"}>White</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"red"})} active={this.state.color === "red"}>Red</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"orange"})} active={this.state.color === "orange"}>Orange</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"pink"})} active={this.state.color === "pink"}>Pink</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"blue"})} active={this.state.color === "blue"}>Blue</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>
                  </Row>
                  :null
                }

            {/* Font selection */}
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowHideFont}>Edit Font</Button>  
            </Row>
    
            {
              this.state.showFont
              ? <Row>

                <Col>
                  <Dropdown className="dropdown-box">
                    <Dropdown.Toggle>
                      Font
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({font:"helvetica"})} active={this.state.font === "helvetica"}>Helvetica</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"times"})} active={this.state.font === "times"}>Times</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                <Col>
                <Dropdown className="dropdown-box">
                  
                    <Dropdown.Toggle>
                      Font Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:1})} active={this.state.fontSize === 1}>1</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:4})} active={this.state.fontSize === 4}>4</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:8})} active={this.state.fontSize === 8}>8</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:12})} active={this.state.fontSize === 12}>12</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:20})} active={this.state.fontSize === 20}>20</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                  <Col>
                  <Dropdown className="dropdown-box">
                    <Dropdown.Toggle>
                      Font Style
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({fontStyle:"bold"})} active={this.state.fontStyle === "bold"}>Bold</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontStyle:"normal"})} active={this.state.fontStyle === "normal"}>Normal</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>
                  </Row>
                  :null
                }

            <Row className='space'>
            </Row>

            {/* Return buttons */}
            {/* <Row>
              <Col className ="link-button">
                <Link to='/'><Button variant='primary'>Return Home</Button></Link>
              </Col>
              <Col className ="link-button">
              <Link to='/Template'><Button variant='primary'>Return Template</Button></Link>
              </Col>
            </Row> */}

          </Col>
        </Row>

        <Row className='edit-button'>
        </Row>

        <Row  className='justify-content-md-center'>
          <Button variant='primary' style={{ width: '60rem'}} onClick={()=>{console.log(ReactDOMServer.renderToReadableStream(templatePart));console.log(templatePart)}}>Export Model as HTML/CSS</Button>  
        </Row>

        <Row className='edit-button'>
        </Row>
        
          
      </Container>
      </>
    )
  }
}

export default EditScreen