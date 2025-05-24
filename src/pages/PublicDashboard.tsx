import React from 'react';
import PRSIdManager from '../components/public/PRSIdManager';
import SupplyLocator from '../components/public/SupplyLocator';
import VaccinationUploader from '../components/public/VaccinationUploader';
import PurchaseForm from '../components/public/PurchaseForm';

export default function PublicDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Public Dashboard</h1>

      <h2>Your PRS ID</h2>
      <PRSIdManager />

      <h2>Find Supplies</h2>
      <SupplyLocator />

      <h2>Vaccination Records</h2>
      <VaccinationUploader />
      
      <h2>Purchase Form</h2>
      <PurchaseForm/>
    </div>
  );
}
