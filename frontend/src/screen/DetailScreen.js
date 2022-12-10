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
      templateState:{}
    };

  }

 

  render() {

    // const MyComponent = ( props ) => <div>{this.state.template}</div>
 
    return(<div>
      {/* <BasicTemplate2/> */}

    </div>)
  }
}

export default DetailScreen