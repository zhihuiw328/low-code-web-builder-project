
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Form, Button, Col, Row, Badge, Modal, Dropdown, Alert} from 'react-bootstrap'
import "./UserTemplateScreen.css"
import BasicTemplate1 from '../component/templates/BasicTemplate1';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import Card from 'react-bootstrap/Card';
import * as ReactDOMServer from 'react-dom/server';
import axios from 'axios'
import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'

class UserTemplateScreen extends React.Component {
    constructor(props) {
      super(props);
      
      this.state={
        templateList:[],
        nameList:[],
        idList:[],
        loaded:false
      }
    }

    componentDidMount() {
        const userLogin = JSON.parse(localStorage.getItem('userInfo'));
      const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userLogin.token}`
        }
      }

      axios.get(`/api/template`, config).then((response)=>{
        if (response.data) {
          let templateList = [];
          let nameList = [];
          let idList = [];
            response.data.data.forEach(template => {
                console.log(template)
                nameList.push(template.name)
                idList.push(template._id)
                console.log(template.name)
                let MyComponent = BasicTemplate1;
                if (template.template == "BasicTemplate2"){
                    MyComponent = BasicTemplate2;
                }
                let templatePart =  <MyComponent templateState={template.templateState}
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
                templateList.push(templatePart);
            });
            this.setState({
                templateList:templateList,
                nameList:nameList,
                idList:idList,
                loaded:true
            })

        }
      })
    }

    render(){
        console.log(this.state.nameList)
        if (!this.state.loaded) {
            return <Alert variant="secondary">
            Loading
          </Alert> ;
      
          } else {
        return(
            <div>
                {this.state.templateList?.map((template, index) => (
                    <div>
                        {/* <Badge> */}
                        <Container fluid="md">
                            <Row>
                            <Link to={`/detail/${this.state.idList[index].toString()}`}>
                                <Card className='preview' border="dark">
                                        {console.log(`/detail/${this.state.idList[index].toString()}`)}
                                        {template}
                                    
                                </Card>  
                            </Link>
                       
                            </Row>
                            <Row className='justify-content-center'>
                         
                                {this.state.nameList[index]}
                            
                            </Row>
                            </Container>
                        {/* </Badge> */}
                    </div>
                ))}
                 
            </div>
        )
    }
}
}


export default UserTemplateScreen