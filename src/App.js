import { useState } from 'react';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Campus/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Heros from './Components/Hero/Heros';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


function App() {
  const [playState, setPlayState] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Heros />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonial />
        <Title subTitle='CONTACT US' title='Get in Touch ' />
        <Contact />
        <Footer />


      </div>
      <VideoPlayer playState={playState}  setPlayState={setPlayState} />
    </div>
  );
}

export default App;
