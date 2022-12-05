import React, { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import Edit from './edit';
import MainPage from "./main"
import Login from './login';
import Template from "./template"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const LOGINFLAG = true;

export default function App() {
  return(
      <div>
          <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<MainPage/> } />
              <Route path="Edit" element={<Edit/>} />
              <Route path="Template" element={<Template/>}/>
              <Route path="Login" element={<Login/>}/>
              <Route path= "*" element={<Bad/>} />
              </Route>
          </Routes>
      </div>
  )
};

function Layout() {
  // May need a global variable
  const [loginFlag, setLoginFlag] = useState(LOGINFLAG);
  let button = <Link to ="/Login" className ="header-word" >Login</Link>;

  // After login, the login button should shows a person logo
  // Before login, shows text 'login'
  // useEffect(() => {
    if (loginFlag === true) {
      button = <Link to ="/Login" className ="header-word" >
                  <FontAwesomeIcon icon={faUser} size="2x"/>
                </Link>;
    }  else {
      button = <Link to ="/Login" className ="header-word" >Login</Link>;
    }
  // }, [loginFlag]);


  return (
      <div>
          <div className = 'nav'>
                <div className = 'item'>
                    <Link to ="/" className ="header-word">Home</Link>
                </div>
                <div className = 'item'>
                    <Link to ="/Edit" className ="header-word">Edit</Link>
                </div>
                
                <div className = 'item'>
                    <Link to ="/Template" className ="header-word">Template</Link>
                </div>
               
                <div className = 'item-narrow'>
                  {button}
                </div>
                
            </div>
          <Outlet/>
 
          <div className = 'footer'></div>
      </div>
    );
}

function Bad() {
  return (
      <div className ="body">
        <h2>There is no info for this page</h2>
        <p>
          <Link to="/"><h2>Go to the home page</h2></Link>
        </p>
      </div>
    );
};
