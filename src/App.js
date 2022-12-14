import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactView from './pages/ContactView';
import HomeView from './pages/HomeView';
import ServicesView from './pages/ServicesView';
import { Routes, Route } from 'react-router-dom';
import BlankSpace from './components/BlankSpace';
import TestView from './pages/TestView';
import AboutView from './pages/AboutView';
import Fade from 'react-reveal/Fade';



function App() {
  

  return (
    <div>
      <BlankSpace/>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<HomeView />}/>
        <Route exact path="/services" element={<ServicesView />}/>
        <Route path="/contact" element={<ContactView />}/>
        <Route path="/about" element={<AboutView />} />
        <Route path="/test" element={<TestView />}/>
      </Routes>
      <ContactForm/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

