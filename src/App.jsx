import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScreen from "./assets/splashscreen";
import Beranda from "./assets/beranda";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      delay: 0,
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
    </Routes>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <SplashScreen onFinish={() => setIsLoading(false)} />
  ) : (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
