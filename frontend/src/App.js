import './App.css';
import {Routes, Route } from 'react-router-dom';
import MainScreen from './screen/MainScreen'
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import TemplateScreen from './screen/TemplateScreen';
import EditScreen from './screen/EditScreen';
import ProfileScreen from './screen/ProfileScreen';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return(
      <>
        <Header />
        <div style={{ marginTop: 50 }}>
        <Routes >
              <Route path="/" element={<MainScreen/>} />
              <Route path="/login" element={<LoginScreen/>} />
              <Route path="/register" element={<RegisterScreen/>} />
              <Route path="/template" element={<TemplateScreen/>} />
              <Route path="/edit" element={<EditScreen/>} />
              <Route path="/profile" element={<ProfileScreen/>} />
          </Routes>
        </div>
          
        <Footer />
      </>
  )
};

export default App
