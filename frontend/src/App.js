import React, {useState} from "react";
import './App.css';
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import Edit from './edit';
import MainPage from "./main"
import Login from './login';
import Template from "./template"



export default function App() {
  const [count, setCount] = useState(0);
  return(
      <div>
          <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<MainPage/> } />
              <Route path="Edit" element={<Edit/>} />
              <Route path="Template" element={<Template/>}/>
              <Route path="Login" element={<Login/>}/>
              <Route path= "*" element={<Bad count={count} setCount ={setCount}/>} />
              </Route>
          </Routes>
      </div>
  )
};

function Layout() {
  return (
      <div>
          <Link to ="/">Home</Link>
          <Outlet/>
      </div>
    );
}

function Bad(props) {
  return (
      <div className ="body">
        <h2>There is no info for this page, but do you know {props.count} people has already liked our website !</h2>
        <h2>Click the button to be one of them!</h2>
        <button onClick = {()=>props.setCount(props.count + 1)}>I Like this page</button>
        <p>
          <Link to="/"><h2>Go to the home page</h2></Link>
        </p>
      </div>
    );
};
