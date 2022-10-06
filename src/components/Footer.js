import { Link } from 'react-router-dom'

const Footer = () => {
    return (


        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Features</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Pricing</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">FAQs</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">About</Link></li>
            </ul>
        </footer>
        </div>

    )
}

export default Footer;