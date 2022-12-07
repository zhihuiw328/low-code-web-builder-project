import React, { useState , useEffect} from 'react';
// import TemplateList from '../component/TemplateList';
// import './TemplateScreen.css';
import Stack from 'react-bootstrap/Stack';
// import axios from 'axios';
const TemplateScreen = () => {
    const [a_templates, setATemplates] = useState([]);
    const [b_templates, setBTemplates] = useState([]);
    const [c_templates, setCTemplates] = useState([]);
    const [d_templates, setDTemplates] = useState([]);
    const [e_templates, setETemplates] = useState([]);
    const getATemplates = () => {

        // const searchUrl = "A_template";
        // await axios(searchUrl)
        // .then(response => {
        // const data = response.data.data
        // setATemplates(data);
        // })
        // .catch(error => {
        // console.log('Error getting fake data: ' + error);
        // })
        var data = [];
        for (var i = 0; i < 10; i++) {
            data[i] = {};
          }
        setATemplates(data);
      };

      useEffect(() => {
        getATemplates();
      },[]);
      
    return (
        <Stack gap={0}>
            <div id='Text' style={{ fontSize: 30, textAlign: 'left', marginLeft: 30, marginTop:20 }}>
        <h1> Template A </h1>
            </div><div className='templates'>
            {/* <TemplateList templates= {a_templates}></TemplateList> */}
        </div>
        <div id='Text' style={{ fontSize: 30, textAlign: 'left', marginLeft: 30 }}>
        <h1> Template B </h1>
    </div><div className='templates'>
            {/* <TemplateList templates= {a_templates}></TemplateList> */}
        </div>
        <div id='Text' style={{ fontSize: 30, textAlign: 'left', marginLeft: 30 }}>
        <h1> Template C </h1>
    </div><div className='templates'>
            {/* <TemplateList templates= {a_templates}></TemplateList> */}
        </div>
    </Stack>

        

        
        
    )
}

export default TemplateScreen