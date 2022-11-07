import Hero from '../components/Home/Hero'
import Reference from '../components/Home/Reference'
import Software from '../components//Home/Software'
import WhyUs from '../components/Home/WhyUs'
import MoneyProblems from '../components/Home/MoneyProblems';



const HomeView = () => {
    return (
      <div>
      <Hero/>
      <MoneyProblems/>
      <WhyUs/>
      {/* <Reference/> */}
      <Software/>
      </div>
      
    )
  }

  export default HomeView;