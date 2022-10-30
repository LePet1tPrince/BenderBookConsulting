import '../../App.css'
import bank from '../../images/icons/landmark-solid.svg'
import magnify from '../../images/icons/magnifying-glass-dollar-solid.svg'
import receipt from '../../images/icons/receipt-solid.svg'
import scale from '../../images/icons/scale-balanced-solid.svg'
import cashRegister from '../../images/icons/cash-register-solid.svg'
import file from '../../images/icons/file-lines-solid.svg'


const servicesHero = () => {
    return (
      <div>
        <div className="text-center font-72 bold">What can we take off your plate?</div>
             <div className="d-flex align-items-center width-50 justify-content-center pt-5">
                <div className="row h-50 justify-content-center w-75">
                    <div className="card-columns col-sm-6 h-50">
                        {/* Bookkeeping column */}
                    <div className="card services-card m-3 border-0">
                        <div className="card-body">
                        <img src={receipt} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                        <h5 className="card-title bold font-28">Business Bookkeeping</h5>
                        <p className="card-text font-20">We want your business to run well, too. An informed business owner is a smart business owner. Are you trying to hire? Do you want to grow your business? Let's get your bookeeping up to date and accurate!</p>
                        </div>
                    </div>
                    <div className="card m-3 border-0">
                        
                        <div className="card-body">
                        <img src={scale} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                        <h5 className="card-title bold font-28">Accounting Systems Setup</h5>
                        <p className="card-text font-20">We get it, you want to roll up your sleves and get into the books yourself! In that case, let us set up your bookkeeping system for you. We throw in some coaching as well to make sure you have all the best tips and tricks we have learned in running your own bookkeeping system.</p>
                        </div>
                    </div>

                        <div className="card m-3 border-0">
                            <div className="card-body">
                            <img src={file} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                            <h5 className="card-title bold font-28">Business Plan Preparation</h5>
                            <p className="card-text font-20">Applying for a bank loan? We know what the bank looks for in an application. Let us work to prepare your financial statements and application so you can get the credit your business deserves.</p>
                            <div className="footer">
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card-columns col-sm-6 h-50 ">
                        {/* Tax column */}
                        <div className="card m-3 border-0">
                            <div className="card-body">
                            <img src={cashRegister} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                            <h5 className="card-title bold font-28">Payroll Setup & Support</h5>
                            <p className="card-text font-20">Let's make sure your employees are paid on time and accurately. Plus, we will take care of remitting everything to the CRA!</p>
                            <div className="footer">
                            </div>
                        </div>
                        </div>
                    
                    <div className="card m-3 border-0 ">
                        <div className="card-body">
                        <img src={magnify} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                        <h5 className="card-title bold font-28">Personal & Sole Proprietor Tax Returns</h5>
                        <p className="card-text font-20">Looking for someone to take the load of personal taxes off your shoulder? Look no further! We file personal and small business taxes.</p>
                        </div>
                    </div>

                    <div className="card m-3 border-0">
                        <div className="card-body">
                        <img src={bank} className="mx-lg-auto img-fluid mx-auto icon-service d-flex justify-contents-center border-0" alt="Hand with dollar sign" width="50" height="50" loading="lazy"/>
                        <h5 className="card-title bold font-28">Corporate Taxes</h5>
                        <p className="card-text font-20">Do you dread talking to your CPA? Do you wish you didn't need to handle their questions? Let us take manage your taxes for you. We have our tax preparers we love working with, or we are happy to work with yours. Accountants love us.</p>
                        </div>
                    </div>
                    </div>

                        
                    </div>
                    </div>
                    </div>
    )
}



export default servicesHero;