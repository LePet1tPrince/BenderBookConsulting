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


function App() {


  return (
    <div>
      <BlankSpace/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/services" element={<ServicesView />}/>
        {/* <HashLink to="/services#bookkeeping">Link to Hash Fragment</HashLink> */}

        <Route path="/contact" element={<ContactView />}/>
        <Route path="/test" element={<TestView />}/>
      </Routes>
      <ContactForm/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

