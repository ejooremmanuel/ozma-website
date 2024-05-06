import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import TopSection from "./components/TopSection";
import Navigation from "./components/Navigation";
import AboutUs from "./screens/AboutUs";
import Services from "./screens/Services";
import HSE from "./screens/HSE";
import Partners from "./screens/Partners";
import Contact from "./screens/Contact";
import IT from "./screens/IT";
import ServiceDetail from "./screens/ServiceDetail";

function App() {
  return (
    <div className="max-h-[100vh] w-screen overflow-x-hidden flex flex-col justify-between">
      <TopSection />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hse" element={<HSE />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/it" element={<IT />} />
          <Route path="/information-technology" element={<IT />} />
          <Route
            path="/information-technology/:slug"
            element={<ServiceDetail />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
