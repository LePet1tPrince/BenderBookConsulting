import Hero from '../components/Home/Hero'
import Reference from '../components/Home/Reference'
import Software from '../components//Home/Software'
import WhyUs from '../components/Home/WhyUs'
import Stylesheet from '../components/Stylesheet';




const TestView = () => {
    return (
      <div>
      <Hero/>
      <Reference/>
      <WhyUs/>
      <Software/>
      <Stylesheet/> {/* Just keep this for colour reference. Delete when done production */}
      </div>
      
    )
  }

  export default TestView;