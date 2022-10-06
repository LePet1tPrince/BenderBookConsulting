import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Stylesheet from './components/Stylesheet';
import ContactView from './pages/ContactView';
import HomeView from './pages/HomeView';
import ServicesView from './pages/ServicesView';
import { Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import TestComponent from './components/TestComponent';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/services" element={<ServicesView />}/>
        {/* <HashLink to="/services#bookkeeping">Link to Hash Fragment</HashLink> */}

        <Route path="/contact" element={<ContactView />}/>
      </Routes>
      <ContactForm/>
      {/* <TestComponent/> */}
      <Footer/>
      <Stylesheet/> {/* Just keep this for colour reference. Delete when done production */}
      
    </div>
  );
}

export default App;

