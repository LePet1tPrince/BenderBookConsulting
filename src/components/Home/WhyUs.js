import '../../App.css'

const WhyUs = () => {
    return (
        <div className="fullscreen border border-primary">
            <div className="container h-50">
                <div className="row h-100">

                    <div className="col-4 my-auto bg-secondary h-100">
                        <h2>
                            Why Choose Us?
                        </h2>
                    </div>
                    {/* <div className="col-2"></div> */}
                    <div className="col-4">
                        {/* first card */}
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">We go beyond 'Bookkeeping'</h5>
                                <p className="card-text">We are your own dedicated CFO.</p>
                            </div>
                        </div>
                        {/* second card */}
                        <div className="card mt-1">
                            <div className="card-body">
                                <h5 className="card-title">We bring our own tools</h5>
                                <p className="card-text">Hiring a bookkeeper can be expensive</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h5 className="card-title">We want your business to be leak-proof</h5>
                                <p className="card-text">Expenses that no longer bring value to the company (we call them 'money 'leaks') can be one of the largest dangers to business health. We have a dedicated professional looking out for leaks so we can put that money back in your pocket.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default WhyUs;