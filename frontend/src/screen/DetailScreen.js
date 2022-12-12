import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link, redirect } from 'react-router-dom'
import { Form, Button, Col, Row, Badge, Modal, Dropdown, Alert} from 'react-bootstrap'
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
      templateName: "BasicTemplate2",
      // current website name
      name:"w",
      userId:"aa",
      templateState:{},
      websiteId:"63955d7dc4056b5825ff62ed",
      loaded: false
    };

  }
  componentDidMount() {
    const userLogin = JSON.parse(localStorage.getItem('userInfo'));
    const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userLogin.token}`
      }
    }
    axios.get(`/api/template/${window.location.href.slice(29)}`, config)
      .then((response)=>{
        if (response.data) {
          console.log(response.data)
          this.setState({
            templateState: response.data.templateState,
            templateName: response.data.template,
            loaded: true
        })
        }
      }
    )
  }

 

  render() {
    const MyComponent = BasicTemplate2;
    if (this.state.templateName == "BasicTemplate1") {
      MyComponent = BasicTemplate1;
    }
    // TODO: ADD here if more module added

    if (!this.state.loaded) {
      return <Alert variant="secondary">
      Loading
    </Alert> ;

    } else {
    return(
      <div>
      
       <MyComponent templateState={this.state.templateState}
                      isDetailView={true}
                      updateBackgroundColor={(update)=>this.setState(state => ({backgroundColor: update}))}
                      setCurrentSection={()=>({})}
                      updateText={()=>({})}
                      updateColor={()=>({})}
                      updatefont={()=>({})}
                      updatefontSize={()=>({})}
                      updatefontStyle={()=>({})}
                      collectTemplateStates={()=>({})}
                      />
      </div>)
    }
  }
}

export default DetailScreen