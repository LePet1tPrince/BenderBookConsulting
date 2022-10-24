import '../../App.css'

const servicesHero = () => {
    return (
      <div>
        <div className="text-center font-72">What can we take off your plate?</div>
             <div className="fullscreen d-flex align-items-center width-50 justify-content-center">
                <div className="row h-50 justify-content-center w-75">
                    <div className="card-columns col-sm-6 h-50">
                    <div className="card services-card m-3 h-100 w-75">
                        <div className="card-body">
                        <h5 className="card-title">Bookkeeping</h5>
                        <p className="card-text">We want your business to run well, too. An informed business owner is a smart business owner. Are you trying to hire? Do you want to grow your business? Let's get your bookeeping up to date and accurate!</p>
                        <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                        <div className="card m-3 h-100 w-75">
                            <div className="card-body">
                            <h5 className="card-title">Payroll Setup & Support</h5>
                            <p className="card-text">Let's make sure your employees are paid on time and accurately. Plus, we will take care of remitting everything to the CRA!</p>
                            <div className="footer">
                            <a href="/" className="btn btn-primary">Learn More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-columns col-sm-6 h-50 ">
                    <div className="card m-3 h-100 w-75">
                        <div className="card-body">
                        <h5 className="card-title">Accounting Systems Setup</h5>
                        <p className="card-text">We get it, you want to roll up your sleves and get into the books yourself! In that case, let us set up your bookkeeping system for you. We throw in some coaching as well to make sure you have all the best tips and tricks we have learned in running your own bookkeeping system.</p>
                        <a href="/" className="btn btn-primary justify-content-end">Learn More</a>
                        </div>
                        </div>

                    <div className="card m-3 h-100 w-75">
                        <div className="card-body">
                        <h5 className="card-title">Personal Tax Returns</h5>
                        <p className="card-text">Looking for someone to take the load of personal taxes off your shoulder? Look no further! We file personal and small business taxes.</p>
                        <a href="/" className="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>

                        
                    </div>
                    </div>
                    </div>
    )
}



export default servicesHero;