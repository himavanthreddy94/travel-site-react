import './App.css';
import travel02 from "./assets/travel01.jpg"
import travel01 from "./assets/travel02.jpg"
import travel03 from "./assets/travel03.jpg"
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Contact Us" }
]

function App() {
  return (
    <>
      <div className="App">
        <Navbar navbarLinks={navbarLinks} />
        <Hero imageSrc={travel01} />
        <Slider imageScr={travel02} title={"Be an explorer!"} subtitle={"never stop the traveller inside you."} />
        <Slider imageScr={travel03} title={"Memories for a lifetime!"} subtitle={"the memories you gain while travelling are the best."} flipped={true} />
        <Footer />
      </div>
    </>
  );
}

export default App;
