import '../../App.css'
import image from '../../images/sad-people.jpg'
import gavel from '../../images/icons/gavel-solid.svg'
import dollar from '../../images/icons/dollar-sign-solid.svg'
import hand from '../../images/icons/hand-holding-dollar-solid.svg'
import stopwatch from '../../images/icons/stopwatch-solid.svg'
import question from '../../images/icons/question-solid.svg'
import Fade from 'react-reveal/Fade';


const MoneyProblems = () => {
    return (
        <div className="fullscreen">
            <Fade bottom>
            
            <div className="text-center font-72 bold">Paying yourself shouldn't be this stressful</div>
            <div className="container h-50">
                <div className="row h-100 d-flex align-items-center ">

                    <div className="col-12 col-lg-4 col-md-8 col-sm-12 d-flex align-items-center justify-content-center h-100 justify-items-center img-response">
                        <img src={image} className="mx-lg-auto img-fluid rounded-5" alt="Sad Business Owner" width="800" height="500" loading="lazy"/>

                        
                    </div>
                    {/* <div className="col-2"></div> */}
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        {/* first card */}
                        <div className="card mb-3 py-5 rounded-5 border-0 text-center">
                                <div className="mb-3">
                                    <img src={hand} className="mx-lg-auto img-fluid rounded-5 mx-auto" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                                </div>
                                <h5 className="card-title font-28">You're are unsure how much you can pay yourself.</h5>
                        </div>
                        {/* second card */}
                        <div className="card mt-3 py-5 rounded-5 border-0 text-center">
                            <div className="mb-3">
                                <img src={gavel} className="mx-lg-auto img-fluid rounded-5 mx-auto" alt="Gavel" width="50" height="50" loading="lazy"/>
                            </div>
                            <h5 className="card-title font-28">You can't remember when your next CRA payment is due.</h5>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        {/* Third Card */}
                        <div className="card mb-3 py-5 rounded-5 border-0 text-center">
                            <div className="mb-3">
                                <img src={question} className="mx-lg-auto img-fluid rounded-5 mx-auto" alt="Question Mark" width="40" height="40" loading="lazy"/>
                            </div>
                            <h5 className="card-title font-28">You wonder if you are being paid what you are worth.</h5>
                    </div>
                    {/* Fourth card */}
                    <div className="card mt-3 py-5 rounded-5 border-0 text-center">
                            <div className="mb-3">
                                <img src={stopwatch} className="mx-lg-auto img-fluid rounded-5 mx-auto" alt="Stopwatch" width="50" height="50" loading="lazy"/>
                            </div>
                            <h5 className="card-title font-28">You can't find the time to tackle that pile of bookkeeping tasks.</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
      </div>
    )
}

export default MoneyProblems;