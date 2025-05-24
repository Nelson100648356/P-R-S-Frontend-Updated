import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Pandemic Resilience System</h1>
      <p>Select a dashboard to continue:</p>

      <div style={{ marginTop: '30px' }}>
        <Link to="/government" style={linkStyle}>Government Dashboard</Link><br /><br />
        <Link to="/merchant" style={linkStyle}>Merchant Dashboard</Link><br /><br />
        <Link to="/public" style={linkStyle}>Public Dashboard</Link>
      </div>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 20px',
  margin: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px'
};
