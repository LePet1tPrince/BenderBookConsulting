import '../../App.css'
import shopkeeper from '../../images/Shopkeeper.jpg'



const WhyUs = ({ data }) => {
    return (
        <div className="">
            <div className="text-center font-72 bold">Why Choose Us?</div>
                <div className="container d-flex align-items-center justify-content-center flex-wrap ">

                    <div class="card text-white border-0 my-5">
                        <img src={shopkeeper} class="card-img rounded-5" alt="Shopkeeper" width="800" height="500"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-52 bold p-4">We go beyond the bookkeeping</h5>
                            <p class="card-text font-28 p-4">We're not just your average bookkeeping firm. Our tailored approach to financial planning will help you grow in all aspects of life and business by catching insights others may have missed before it's too late!</p>
                        </div>
                    </div>

                    <div class="card text-white border-0 my-5">
                        <img src={shopkeeper} class="card-img rounded-5" alt="Shopkeeper" width="800" height="500"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-52 bold p-4">We bring our own tools</h5>
                            <p class="card-text font-28 p-4">Hiring a bookkeeper is expensive, but you get all the software for free! Plus we are very experienced in using it. You'll be amazed by what we can do with this package and how quickly your books will balance themselves each year once again.</p>
                        </div>
                    </div>

                    <div class="card text-white border-0 my-5">
                        <img src={shopkeeper} class="card-img rounded-5" alt="Shopkeeper" width="800" height="500"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-52 bold p-4">Where does the money go?</h5>
                            <p class="card-text font-28 p-4">Did you know if you hire your child to work for your business, they don't need to pay Employment Insurance? Neither did our client, Stacy, until she hired us to manage her payroll. Imagine her surprise when we got the CRA to put an extra $1200 in her pocket.</p>
                        </div>
                    </div>

                    <div class="card text-white border-0 my-5">
                        <img src={shopkeeper} class="card-img rounded-5" alt="Shopkeeper" width="800" height="500"/>
                        <div class="card-img-overlay hover-appear rounded-5">
                            <h5 class="card-title font-52 bold p-4">We want your business to be leak-proof</h5>
                            <p class="card-text font-28 p-4">Expenses that no longer bring value to the company (we call them 'money 'leaks') can be one of the largest dangers to business health. We have a dedicated professional looking out for leaks so we can put that money back in your pocket.</p>
                        </div>
                    </div>
                </div>



               
            </div>

    )
};



  

export default WhyUs;