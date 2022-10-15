import '../../App.css'
import shopkeeper from '../../images/Shopkeeper.jpg'

const WhyUs = () => {
    return (
        <div className="fullscreen">
            <div classname="d-flex align-items-center color-primary"><h1>Why Us?</h1></div>
            <div className="container h-50">
                <div className="row h-100">

                    <div className="col-4 d-flex align-items-center justify-content-center h-100 justify-items-center">
                        <img src={shopkeeper} className="mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>

                        
                    </div>
                    {/* <div className="col-2"></div> */}
                    <div className="col-4">
                        {/* first card */}
                        <div className="card shadow">
                            <div className="card-body ">
                                <h5 className="card-title">We go beyond 'Bookkeeping'</h5>
                                <p className="card-text">We are your own dedicated CFO. We search for insights your last bookkeeper overlooked. We take the context of your business, your personal goals, and eveyrthing we know about you to make the best recommendations possible!</p>
                            </div>
                        </div>
                        {/* second card */}
                        <div className="card mt-1 shadow">
                            <div className="card-body">
                                <h5 className="card-title">We bring our own tools</h5>
                                <p className="card-text">Hiring a bookkeeper can be expensive, especially when you tack on the cost of all the software you need to get the job done. Luckily, we have our own software and are very experienced in using it. You will be amazed what we can get done</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        {/* Third Card */}
                        <div className="card mt-5 shadow">
                            <div className="card-body">
                                <h5 className="card-title">We want your business to be leak-proof</h5>
                                <p className="card-text">Expenses that no longer bring value to the company (we call them 'money 'leaks') can be one of the largest dangers to business health. We have a dedicated professional looking out for leaks so we can put that money back in your pocket.</p>
                            </div>
                    </div>
                    {/* Fourth card */}
                    <div className="card mt-1 shadow">
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