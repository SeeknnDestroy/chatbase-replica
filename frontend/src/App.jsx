import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Playground from './pages/Playground';

// Placeholder components for other pages
const Activity = () => <div>Activity Page</div>;
const Analytics = () => <div>Analytics Page</div>;
const Sources = () => <div>Sources Page</div>;
const Actions = () => <div>Actions Page</div>;
const Contacts = () => <div>Contacts Page</div>;
const Connect = () => <div>Connect Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Playground />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App; 