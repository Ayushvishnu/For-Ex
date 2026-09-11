import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AlgoTrading from "./components/AlgoTrading/AlgoTrading";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blogs/Blog";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import Service from "./components/Services/Service";
import "./App.css";

function App() {
  return (
    <div className="bg-bgDark text-textPrimary font-sans antialiased">
      <Navbar />
      <Home />
      <Service />

      <AlgoTrading />

      <Testimonials />

      <Blog />
      <About />

      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
