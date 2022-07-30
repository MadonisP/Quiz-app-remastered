import Features from '../components/Features'
import Hero from '../components/Hero'
import Introducing from '../components/Introducing';
import Navbar from "../components/Navbar";
import QuickInfo from '../components/QuickInfo';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <QuickInfo/>
      <Introducing/>
    </div>
  )
}

export default Home