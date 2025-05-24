// Defines the application routes using React Router
// It controls which dashboard loads based on the URL — it's the central navigation controller.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GovernmentDashboard from './pages/GovernmentDashboard';
import MerchantDashboard from './pages/MerchantDashboard';
import PublicDashboard from './pages/PublicDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/government" element={<GovernmentDashboard />} />
        <Route path="/merchant" element={<MerchantDashboard />} />
        <Route path="/public" element={<PublicDashboard />} />
      </Routes>
    </Router>
  );
}
