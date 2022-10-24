import banner from '../../images/Sillouhette-3-people.jpg'
import '../../App.css'

const Hero = () => {
    return (
        <div className="fullscreen">
        <div className="b-example-divider"></div>

            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img src={banner} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Your No-Nonsense Bookkeeping Experts</h1>
                <p className="lead">With our team of experts at your side, you'll have peace-of mind that the books are in good hands. Let us take care of all those pesky details so you can focus on running things smoothly day to day! </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Let's Get Started</button>
                </div>
                </div>
            </div>
            </div>
        
      </div>
    )
}

export default Hero;