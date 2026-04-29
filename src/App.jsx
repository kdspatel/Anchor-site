import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Reels from "./components/Reels";
import Testimonials from "./components/Testimonials";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import EventSwitcher from "./components/EventSwitcher";
import Booking from "./components/Booking";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function App() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // 🚫 remove #about or any hash on initial load
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  if (!started) {
    return <Intro onEnter={() => setStarted(true)} />;
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <EventSwitcher />
      <Reels />
      <Testimonials />
      <Booking />
      <Footer />
      <BackToTop/>
    </div>
  );
}