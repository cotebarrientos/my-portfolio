import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import ScrollButton from "./components/ScrollButton"

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App
