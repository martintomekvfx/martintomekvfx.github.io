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
      // Small delay to ensure content is rendered after navigation
      const scrollToElement = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      // Try immediately, then again after a short delay for route transitions
      scrollToElement();
      const timeout = setTimeout(scrollToElement, 100);
      return () => clearTimeout(timeout);
    } else {
      // No hash - scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
