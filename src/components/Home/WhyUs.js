import '../../App.css'
import shopkeeper from '../../images/Shopkeeper.jpg'
import whyus1 from '../../images/happy-owner.jpg'
import whyus2 from '../../images/happy-owners-2.jpg'
import whyus3 from '../../images/rocket.jpg'
import Fade from 'react-reveal/Fade';




const WhyUs = ({ data }) => {
    return (
        <div className="fullscreen">
            <div className="text-center font-72 bold pb-5">Why Choose Us?</div>
                <Fade>
                <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                    <div class="card text-white border-0 m-3">
                        <img src={whyus1} class="card-img rounded-5" alt="Shopkeeper" width="500" height="400"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-40 bold px-4">We go beyond the bookkeeping</h5>
                            <p class="card-text font-20 px-4">We're not just your average bookkeeping firm. Our tailored approach to financial planning will help you grow in all aspects of life and business by catching insights others may have missed before it's too late!</p>
                        </div>
                    </div>
                {/* </Fade>
                <Fade> */}

                    <div class="card text-white border-0 m-3">
                        <img src={whyus2} class="card-img rounded-5" alt="Shopkeeper"  width="500" height="400"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-40 bold px-4">We bring our own tools</h5>
                            <p class="card-text font-20 px-4">Hiring a bookkeeper is expensive, but you get all the software for free! Plus we are very experienced in using it. You'll be amazed by what we can do with this package and how quickly your books will balance themselves each year once again.</p>
                        </div>
                    </div>
                {/* </Fade> */}
                
                {/* <Fade> */}
                    <div class="card text-white border-0 m-3">
                        <img src={shopkeeper} class="card-img rounded-5" alt="Shopkeeper"  width="500" height="400"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-40 bold px-4">We work for your goals</h5>
                            <p class="card-text font-20 px-4">We are not a corporate accounting firm with a cookie-cutter approach. We start by getting to know your goals, and let that inform every piece of advice we offer.</p>
                        </div>
                    </div>
                </div>
                </Fade>


               
            </div>

    )
};



  

export default WhyUs;