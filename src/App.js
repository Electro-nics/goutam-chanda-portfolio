import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro'
import Skills from "./components/Skills/skills";
import Appoinment from "./components/Appoinment/appoinment";
import Pricing from "./components/Pricing/pricing";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Appoinment/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
