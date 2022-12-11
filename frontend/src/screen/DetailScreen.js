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
    axios.get(`/api/template/${this.state.websiteId}`, config)
      .then((response)=>{
        if (response.data) {
          console.log(response.data)
          this.setState({
            templateState: response.data.templateState,
            loaded: true
        })
        }
      }
       
        
    )
    // TODO: Need to convert string to template here
    // console.log(data)
    // if (data.template == "BasicTemplate2") {
    //   // this.setState()
    // }
  }

 

  render() {
    // console.log(this.state.loaded)
    const MyComponent = ""
    if (!this.state.loaded) {
      return <div className="word3"> Loading  </div> ;
    } else {
 
    return(<div>
       <BasicTemplate2 
      //  allStates
       
      //  pageContent = {this.state.templateState.pageContent}
      //                 templateName = {this.state.templateState.templateName}
      //                 backgroundColor = {this.state.templateState.backgroundColor}
                      templateState={this.state.templateState}
                      isDetailView={false}
                      updateBackgroundColor={(update)=>this.setState(state => ({backgroundColor: update}))}
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