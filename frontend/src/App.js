import './App.css';
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import MainScreen from './screen/MainScreen'
import LoginScreen from './screen/LoginScreen';
import TemplateScreen from './screen/TemplateScreen';
import EditScreen from './screen/EditScreen';
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
              <Route path="/template" element={<TemplateScreen/>} />
              <Route path="/edit" element={<EditScreen/>} />
          </Routes>
        </div>
          
        <Footer />
      </>
  )
};

export default App
