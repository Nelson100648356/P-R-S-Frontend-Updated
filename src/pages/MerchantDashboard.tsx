import React from 'react';
import StockManager from '../components/merchant/StockManager';
import SalesReporter from '../components/merchant/SalesReporter';
import RestrictionCompliance from '../components/merchant/RestrictionCompliance';

export default function MerchantDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Merchant Dashboard</h1>

      <h2>Stock Management</h2>
      <StockManager />

      <h2>Sales Reports</h2>
      <SalesReporter />

      <h2>Purchase Restriction Compliance</h2>
      <RestrictionCompliance />
    </div>
  );
}
