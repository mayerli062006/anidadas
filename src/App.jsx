import { Routes, Route } from "react-router-dom"

import Header from "./Components/Header/Header.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"

import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Contact from "./pages/Contact.jsx"
import Male from "./pages/Male.jsx"
import Female from "./pages/Female.jsx"

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="male" element={<Male />} />

        <Route path="female" element={<Female />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App