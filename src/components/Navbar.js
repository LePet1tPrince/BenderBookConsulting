import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Bender Book Consulting</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/services" data-bs-toggle="dropdown">
                  Services
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/services#bookkeeping">Bookkeeping</Link></li>
                  <li><Link class="dropdown-item" to="/services/system-setup">Accounting Systems Setup</Link></li>
                  <li><Link class="dropdown-item" to="/services/payroll-setup">Payroll Setup & Support</Link></li>
                  <li><Link class="dropdown-item" to="/services/personal-tax-returns">Personal Tax Returns</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/contact" role="button" aria-expanded="false">
                  Contact Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar;