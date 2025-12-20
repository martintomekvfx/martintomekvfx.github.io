import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Project from './pages/Project';
import './index.css';

// Analytics tracking
const trackPageView = (path) => {
  console.log(`[Analytics] Page view: ${path}`);
};

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:projectId" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
