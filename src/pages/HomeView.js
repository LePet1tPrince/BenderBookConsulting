import Hero from '../components/Home/Hero'
import Reference from '../components/Home/Reference'
import Software from '../components//Home/Software'
import WhyUs from '../components/Home/WhyUs'
import Fade from 'react-reveal/Fade';



const HomeView = () => {
    return (
      <div>
      <Hero/>
      {/* <Reference/> */}
      <WhyUs/>
      <Software/>
      </div>
      
    )
  }

  export default HomeView;