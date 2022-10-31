import banner from '../../images/Sillouhette-3-people.jpg'
import '../../App.css'
import Fade from 'react-reveal/Fade';
import BlankSpace from '../../components/BlankSpace'
import QBOcert from '../../images/certifications/QBO-advanced-certified.png'
import Xerocert from '../../images/certifications/Xero-certified.png'




const Hero = () => {
    return (
        <div className="fullscreen fade-in">
        <div className="b-example-divider"></div>
        {/* <Fade duration={2000}> */}
            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img src={banner} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                <h1 className="lh-1 mb-3 font-56 bold">Your No-Nonsense Bookkeeping Experts</h1>
                <p className="lead">With our team of experts at your side, you'll have peace of mind that the books are in good hands. Let us take care of all those pesky details so you can focus on running things smoothly day to day! </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a href="#contact">
                        <button type="button" className="btn btn-primary text-light px-4 py-3 mt-4 me-md-2 rounded-pill fs-2">
                            Hire Us
                        </button>
                    </a>
                </div>
               
                
                </div>
            </div>
            <div className="row">
                <div className="pt-5 d-flex justify-content-center col col-6">
                    <img src={QBOcert} alt="QBO Certified" height="200" loading="lazy"/>
                </div>
                <div className="pt-5 d-flex justify-content-center col col-6">
                    <img src={Xerocert} alt="Xero Certified" height="200" loading="lazy"/>
                </div>
            </div>
            </div>
            {/* <BlankSpace/>
            <div className="container bg-primary bg-gradient h-10 my-5 font-36 text-white text-center rounded-5">
                <div className="row">
                    <div className="col col-4">
                        Make Informed Decisions
                    </div>
                    <div className="col col-4">
                        Run your business with confidence
                    </div>
                    <div className="col col-4">
                        Enjoy more time
                    </div>
                </div>

            </div> */}
            {/* </Fade> */}
        
      </div>
    )
}

export default Hero;