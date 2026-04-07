import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <main className="content">
          <Routes>
            <Route path="/" element={<div className="container"><h1>RnR Wellness Home</h1><p>Dashboard & Gallery will be visible here to guests.</p></div>} />
            {/* We will add Admin and Member routes here in the next step */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;