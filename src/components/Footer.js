import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Footer = () => {
    return (


        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0">&copy; Bender Book Consulting. All Rights Reserved</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
            </a>
            <a href="/">Scroll to Top</a>

            {/* <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to="/" className="nav-link px-2">Home</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2">Features</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2">Pricing</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2">FAQs</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2">About</Link></li>
            </ul> */}
        </footer>
        </div>

    )
}

export default Footer;