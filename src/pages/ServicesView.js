import '../App.css';
import ServicesHero from '../components/services/servicesHero';
import Bookkeeping from '../components/services/bookkeeping';
import Ass from '../components/services/ass';
import Payroll from '../components/services/payroll';
import PersonalTax from '../components/services/personalTax';
import Pricing from '../components/services/Pricing';


const ServicesView = () => {
    return (
      <div>
       <ServicesHero />
       <Bookkeeping />
       <Ass />
       <Payroll />
       <PersonalTax />
       <Pricing/>

      </div>
         
    )
  };

  export default ServicesView;