import Headshot from '../images/Headshot.jpg'

const About = () => {
    return (
        <div className="fullscreen d-flex justify-content-center">
            <div className="b-example-divider"></div>
                <div className="h-75 w-75">
                    <div className="card bg-dark text-white">
                        <img src={Headshot} className="card-img rounded-5" alt="Headshot" />
                        
                                <div className="card-img-overlay d-flex justify-content-end align-items-center mx-5">
                                    <p className="card-text w-50 font-18">
                                    "I can't believe they don't teach this stuff in highschool". These were my first thoughts after taking my first personal finance course in university. The world of money is complex and it often feels like its designed to keep you in the dark. But when you are able to understand your goals AND use your money in ways that align with your goals, it really can be life changing. <br/>
                                    Being a certified bookkeeping professional and personal finance nerd, I don't just run your business finances. I work with you to achieve the goals you want for your business and your personal life. I have personally helped over 30 businesses achieve new levels of confidence and freedom.
                                    <br/> <br/>

                                    <em>Timmy Bender</em> 


                                    </p>
                                </div>
                    </div>
                </div>

        
      </div>

    )
}

export default About;