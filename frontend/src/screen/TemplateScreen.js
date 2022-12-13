import React, { useState , useEffect} from 'react';
import TemplateList from '../component/TemplateList';
import './TemplateScreen.scss';
import Stack from 'react-bootstrap/Stack';
import FormContainer from '../component/FormContainer';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TemplateScreen = () => {
    const [Basic_templates, setBasicTemplates] = useState([]);
    const [b_templates, setBTemplates] = useState([]);
    // const [c_templates, setCTemplates] = useState([]);
    // const [d_templates, setDTemplates] = useState([]);
    // const [e_templates, setETemplates] = useState([]);

    

    const getBasicTemplates = () => {

        var data = [];
        for (var i = 0; i < 2; i++) {
            data[i] = {};
            data[i]["template_type"] = 0;
            data[i]["template_id"] = i;
            data[i]["template_str"] = "BasicTemplate" + (i+1);
            data[i]["image_path"] = "IMG_2188.JPG"; //"BasicTemplate" + i + ".JPG";
          }
        setBasicTemplates(data);
      };

      const getBTemplates = () => {

        var data = [];
        for (var i = 2; i < 4 ; i++) {
            data[i] = {};
            data[i]["template_type"] = 0;
            data[i]["template_id"] = i;
            data[i]["template_str"] = "BasicTemplate" + (i+1);
            data[i]["image_path"] = "IMG_2188.JPG"; //"BasicTemplate" + i + ".JPG";
          }
        setBTemplates(data);
      };

      useEffect(() => {
        getBasicTemplates();
        getBTemplates();
      },[]);

    return (
        <Stack className='stack' gap={0}>
                <div  id='Text' style={{ fontSize: 30, textAlign: 'center', marginLeft: 30, marginTop:20 }}>
            <h1> Choose your template  </h1>
            </div>
            <div className='divider' id='Text' style={{ fontSize: 30, textAlign: 'center', marginLeft: 30, marginTop:20 }}>
            <h3> Basic Templates </h3>
                </div>
                <div className='templates'>
                <TemplateList templates= {Basic_templates}></TemplateList>
            </div>
            {/* <div className="divider" style={{margin: '0 0 3% 0'}}>
            </div> */}
            <div className='divider' id='Text' style={{ fontSize: 30, textAlign: 'center', marginLeft: 30 }}>
            <h3> Profile Templates </h3>
              </div>
              <div className='templates'>
                <TemplateList templates= {b_templates}></TemplateList>
            </div>
        </Stack>
    )
}

export default TemplateScreen