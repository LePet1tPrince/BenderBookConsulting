
import banner from '../images/Sillouhette-3-people.jpg'
import owners from '../images/restaurant.jpg'
import '../App.css'
import Fade from 'react-reveal/Fade';
import BlankSpace from '../components/BlankSpace'
import QBOcert from '../images/certifications/QBO-advanced-certified.png'
import Xerocert from '../images/certifications/Xero-certified.png'


const TestComponent = () => {
  

    return (
        <div className="fullscreen has-bg-img">
        {/* <img src={owners} class="bg-img " alt="Shopkeeper"/> */}
        <div className="b-example-divider"></div>
        <h5 class="font-52 bold p-4 col-8">We go beyond the bookkeeping</h5>
                            <p class="font-28 p-4 col-8">We're not just your average bookkeeping firm. Our tailored approach to financial planning will help you grow in all aspects of life and business by catching insights others may have missed before it's too late!</p>
                    
            
             <BlankSpace/>


        
      </div>
    )
}

export default TestComponent;