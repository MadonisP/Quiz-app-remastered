import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar";
import QuickInfo from '../components/QuickInfo';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <QuickInfo/>
    </div>
  )
}

export default Home