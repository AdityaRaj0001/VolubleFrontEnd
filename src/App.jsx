import Navbar from "./components/Navbar"
import './index.css'
import Features from "./components/Features"
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import AboutUs from "./components/AboutUs"
import Herosection from "./components/Herosection";
import Scanner from "./components/Scanner";
function App() {
  return (
    <>
      <Navbar/>
      <Herosection></Herosection>
      <Card1/>
      <Card2/>
      
      <Features></Features>
      <AboutUs/>
      <Scanner></Scanner>
      
    </>
  )
  
}

export default App
