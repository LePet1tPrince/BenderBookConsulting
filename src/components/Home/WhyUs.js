import '../../App.css'

import Fade from 'react-reveal/Fade';
import WhyUsCard from './WhyUsCard';
import WhyUsCards from '../data/WhyUsCards'




const WhyUs = () => {
    return (
        <div className="fullscreen">
            <div className="text-center font-72 bold pb-5">Why Choose Us?</div>
                <Fade>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                    {WhyUsCards.map(card => {
                        return <WhyUsCard key={card.id} {...card}/>

                    })}
                   
              
                </div>
                </Fade>


               
            </div>

    )
};



  

export default WhyUs;