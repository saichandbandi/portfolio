import About from "./Components/About";
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={10}
        outerSize={11}
        color="255,255,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work /> 
      <Contact/>
    </div>
  );
}

export default App;