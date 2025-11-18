import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Innovations from "./Pages/Innovations/Innovations"
import Products from "./Pages/Products/Products"
import Contact from "./Pages/Contact/Contact"
import Services from "./Pages/Services/Services"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"


function App() {

  return (
    <div className="app-container">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
