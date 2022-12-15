import '../../App.css'
import Fade from 'react-reveal/Fade';
import Service from './Service';
import Services from '../data/services'



const servicesHero = () => {
    
    return (
      <div>
        <Fade bottom>
        <div className="text-center font-72 bold py-5">What can we take off your plate?</div>
            {Sections.map(section => {
                return <div>
                        <div className={`font-60 bold text-center text-light ${section.color}`}>{section.title}</div>
                        <div className="container ">
                            <div className="row row-cols-3 justify-content-md-center">
                                {section.servicesArray.map(service => {
                                    return <Service key={service.id} {...service} />

                                })}
                            </div>
                        </div>
                    
                    

                </div>
        
            })}
                


                        </Fade>

                    </div>
                       
    )
}


var ongoingServices = Services.filter(function (service) {
    return service.type === "Ongoing"
  });
  var taxServices = Services.filter(function (service) {
    return service.type === "Taxes"
  });
  var customServices = Services.filter(function (service) {
    return service.type === "Custom"
  });

  const Sections = [
    {
        id: 1,
        title: "Ongoing",
        color: "bg-info",
        servicesArray: ongoingServices
    },
    {
        id: 2,
        title: "Taxes",
        color: "bg-primary",
        servicesArray: taxServices
    },
    {
        id: 3,
        title: "Custom Projects",
        color: "bg-dark-primary",
        servicesArray: customServices
    }
]
  

export default servicesHero;