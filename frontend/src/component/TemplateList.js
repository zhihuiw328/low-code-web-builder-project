import React from 'react';
import './TemplateList.css';
import Image from 'react-bootstrap/Image'
import {Link} from "react-router-dom";

const TemplateList = (props) =>{
    return (
     <>
      {props.templates?.map((template, index) => (
        <div className='image-container m-3'>
         <div style = {{padding:20, fontSize:20, float:'left', margin: 'auto', height:500, width:400}}>
         <Link to={`/edit`} state={{templateStr: template.template_name}}><Image src={require("./template_image/" + template.image_path)} width="300" height="400">
          </Image></Link>
         </div>
        </div>
       ))}
     </>
    );
   };
   
   export default TemplateList;