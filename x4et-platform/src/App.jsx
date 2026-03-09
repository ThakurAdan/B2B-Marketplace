import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import EngagementWorkspace from './pages/EngagementWorkspace';
import TechnologyDiscovery from './pages/TechnologyDiscovery';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/engagement/:id" element={<EngagementWorkspace />} />
        <Route path="/discovery" element={<TechnologyDiscovery />} />
      </Routes>
    </Router>
  );
}

export default App;
