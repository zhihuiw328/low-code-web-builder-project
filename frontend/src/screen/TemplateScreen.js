import React, { useState , useEffect} from 'react';
import TemplateList from '../component/TemplateList';
import './TemplateScreen.css';
import Stack from 'react-bootstrap/Stack';
import FormContainer from '../component/FormContainer';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
const TemplateScreen = () => {
    const [Basic_templates, setBasicTemplates] = useState([]);
    const [b_templates, setBTemplates] = useState([]);
    const [c_templates, setCTemplates] = useState([]);
    const [d_templates, setDTemplates] = useState([]);
    const [e_templates, setETemplates] = useState([]);
    const getBasicTemplates = () => {

        var data = [];
        for (var i = 1; i < 3; i++) {
            data[i] = {};
            data[i]["template_name"] = "BasicTemplate" + i;
            data[i]["template_file"] = "../component/templates/BasicTemplate" + i + ".js";
            data[i]["image_path"] = "IMG_2188.JPG"; //"BasicTemplate" + i + ".JPG";
          }
        setBasicTemplates(data);
      };

      useEffect(() => {
        getBasicTemplates();
      },[]);

    return (
        <Stack gap={0}>
            <div id='Text' style={{ fontSize: 30, textAlign: 'left', marginLeft: 30, marginTop:20 }}>
            <h1> Template A </h1>
                </div><div className='templates'>
                <TemplateList templates= {Basic_templates}></TemplateList>
            </div>
            <div id='Text' style={{ fontSize: 30, textAlign: 'left', marginLeft: 30 }}>
            <h1> Template B </h1>
        </div><div className='templates'>
                <TemplateList templates= {Basic_templates}></TemplateList>
            </div>
            <div id='Text' style={{ fontSize: 30, textAlign: 'left', marginLeft: 30 }}>
            <h1> Template C </h1>
        </div><div className='templates'>
                <TemplateList templates= {Basic_templates}></TemplateList>
            </div>
        </Stack>
    )
}

export default TemplateScreen