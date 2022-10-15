import Xero from '../../images/Xero-logo.png'
import Dext from '../../images/Dext-logo.png'
import plooto from '../../images/plooto-logo.png'
import QBO from '../../images/QBO-logo.png'
import wave from '../../images/wave-logo.jpg'
import excel from '../../images/excel-logo.png'


const Software = () => {
    return (
    <div className="py-5">
        <div className="container">
            <div className="row d-flex text-center">
                <h1>Our Picks</h1>
            </div>
            <div className="row d-flex text-center">
                <h3>These are some of our favourite software to work with</h3>
            </div>
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col hover-grow">
                    <a href="https://www.xero.com/ca/" target="_blank" width="100px" height="100px">
                        <img src={Xero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col hover-grow">
                    <a href="https://dext.com/ca" target="_blank">
                        <img src={Dext} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col hover-grow">
                    <a href="https://www.plooto.com/" target="_blank">
                        <img src={plooto} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="150px" height="150px"/>
                    </a>
                </div>
                <div className="col hover-grow">
                    <a href="https://quickbooks.intuit.com/ca/" target="_blank">
                        <img src={QBO} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col hover-grow">
                    <a href="https://www.waveapps.com/" target="_blank">
                        <img src={wave} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col hover-grow">
                    <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank">
                        <img src={excel} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
                    </a>
                </div>

            </div>
        </div>
    </div>
    );
  }
  
  export default Software;
  
  