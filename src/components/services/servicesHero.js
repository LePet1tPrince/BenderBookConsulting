import '../../App.css'

const servicesHero = () => {
    return (
      <div>
             <div className="fullscreen d-flex align-items-center width-50 justify-content-center">
                <div className="row h-50 justify-content-center">
                    <div className="card-columns col-sm-6 h-50">
                    <div className="card services-card m-3 bg-primary border-light border text-light h-100">
                        <div className="card-body">
                        <h5 className="card-title">Bookkeeping</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to ad</p>
                        <a href="/" className="btn btn-light text-primary"><strong>Learn More</strong></a>
                        </div>
                    </div>
                        <div className="card m-3 h-100">
                            <div className="card-body">
                            <h5 className="card-title">Payroll Setup & Support</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <div className="footer">
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-columns col-sm-6 h-50">
                    <div className="card m-3 h-100">
                        <div className="card-body">
                        <h5 className="card-title">Accounting Systems Setup</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary justify-content-end">Go somewhere</a>
                        </div>
                        </div>

                    <div className="card m-3 h-100">
                        <div className="card-body">
                        <h5 className="card-title">Personal Tax Returns</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>

                        
                    </div>
                    </div>
                    </div>
    )
}



export default servicesHero;