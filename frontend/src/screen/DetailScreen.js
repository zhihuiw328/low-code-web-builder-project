import React, { useState } from 'react'
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
import axios from 'axios'



class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: BasicTemplate2,
      name:"w",
      userId:"aa",
      templateState:{},
      websiteId:"639517dc133b78c26ac36cd5"
    };

  }
  async componentDidMount() {
    const userLogin = JSON.parse(localStorage.getItem('userInfo'));
    const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userLogin.token}`
      }
    }
    const { data } = await axios.get(`/api/template/${this.state.websiteId}`, config)
    // TODO: Need to convert string to template here
    console.log(data)
  }

 

  render() {
    
    // const MyComponent =
 
    return(<div>
       <BasicTemplate2 pageContent = {this.state.templateState.pageContent}/>
      

    </div>)
  }
}

export default DetailScreen