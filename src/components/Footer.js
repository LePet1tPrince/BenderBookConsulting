import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import logo from '../images/BenderBooksIcon_Colour.png'

const Footer = () => {
    return (


        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="80" height="80" loading="lazy"/>

            <p className="col-md-4 mb-0 font-20">&copy; 2022 Bender Book Consulting. All Rights Reserved</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
            </a>

           
        </footer>
        </div>

    )
}

export default Footer;