import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen selection:bg-blue-200 selection:text-blue-900">
          <Background />
          <Navbar />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>

          <footer className="relative z-10 py-8 text-center text-gray-500 text-sm glass-panel mx-6 mb-6">
            <p>© 2026 Aswin Pradeep. Crafted with React, Framer Motion & ❤️</p>
          </footer>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
