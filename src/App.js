import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Reasons from './Components/Reasons/Reasons';
import Prog from './Components/programs/Prog';
import Testimonials from './Components/TESTIMONIALS/TESTIMONIALS';

function App() {
  return (
    <div className="App">
    <Hero/>
    <Prog/>
    <Reasons/>
    <Plans/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
