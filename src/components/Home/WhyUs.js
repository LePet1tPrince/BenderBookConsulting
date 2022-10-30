import '../../App.css'
import shopkeeper from '../../images/Shopkeeper.jpg'

const WhyUs = () => {
    return (
        <div className="">
            <div className="text-center font-72 bold">Why Us?</div>
                <div className="row">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="col col-6 box">
                            <div className="body">
                                <div className="imgContainer">
                                    <img src={shopkeeper} alt="" width="800" height="700" />
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <h3 className="text-white fs-5">We go beyond the bookkeeping</h3>
                                        <p className="fs-6 text-white">We're not just your average bookkeeping firm. Our tailored approach to financial planning will help you grow in all aspects of life and business by catching insights others may have missed before it's too late!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="container d-flex align-items-center justify-content-center flex-wrap">
                <div className="box col col-6">
                    <div className="body">
                        <div className="imgContainer">
                            <img src={shopkeeper} alt="" width="800" height="700" />
                        </div>
                        <div className="content d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h3 className="text-white fs-5">We bring our own tools</h3>
                                <p className="fs-6 text-white">Hiring a bookkeeper is expensive, but you get all the software for free! Plus we are very experienced in using it. You'll be amazed by what we can do with this package and how quickly your books will balance themselves each year once again.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div className="container d-flex align-items-center justify-content-center flex-wrap">
                <div className="box">
                    <div className="body">
                        <div className="imgContainer">
                            <img src={shopkeeper} alt="" width="800" height="700" />
                        </div>
                        <div className="content d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h3 className="text-white fs-5">Where does the money go?</h3>
                                <p className="fs-6 text-white">Expenses that no longer bring value to the company (we call them 'money 'leaks') can be one of the largest dangers to business health. We have a dedicated professional looking out for leaks so we can put that money back in your pocket.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="container d-flex align-items-center justify-content-center flex-wrap">
                <div className="box">
                    <div className="body">
                        <div className="imgContainer">
                            <img src={shopkeeper} alt="" width="800" height="700" />
                        </div>
                        <div className="content d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h3 className="text-white fs-5">We want your business to be leak-proof</h3>
                                <p className="fs-6 text-white">Expenses that no longer bring value to the company (we call them 'money 'leaks') can be one of the largest dangers to business health. We have a dedicated professional looking out for leaks so we can put that money back in your pocket.</p>
                            </div>
                        </div>
                    </div>
            

                    

                </div>
            </div>
      </div>
    )
}

export default WhyUs;