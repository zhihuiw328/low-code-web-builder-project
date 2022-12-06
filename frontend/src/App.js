import './App.css';
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import MainScreen from './screen/MainScreen'
import LoginScreen from './screen/LoginScreen';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return(
      <>
        <Header />
          <Routes>
              <Route path="/" element={<MainScreen/>} />
              <Route path="/login" element={<LoginScreen/>} />
          </Routes>
        <Footer />
      </>
  )
};

export default App
