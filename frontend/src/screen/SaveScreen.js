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
import DetailScreen from './DetailScreen';
import Card from 'react-bootstrap/Card';
import * as ReactDOMServer from 'react-dom/server';
import axios from 'axios'



class SaveScreen extends React.Component {
  render(){
    return (
      <Card style={{"text-align":"center", "margin":"20%"}}>
        <Card.Body>
        <Card.Title>Save your website successfully!</Card.Title>
        <Card.Text>
        You can now go to your profile page to view and share your created websites!
        </Card.Text>
        <Link to='/Template'><Button variant='primary'>Home Page</Button></Link>
        <Link to='/profile'><Button variant='primary'>Profile Page</Button></Link>
      </Card.Body>
      <Card.Footer>Thanks for using our website!</Card.Footer>
      </Card>
    )
  }
 
}

export default SaveScreen