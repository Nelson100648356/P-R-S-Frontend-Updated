 // This is the main page for government users.it helps to display various data e.g vaccinationRecord
// Helps government official monitor several activities.
import React from 'react';
import VaccinationTable from '../components/government/VaccinationTable';
import InventoryTable from '../components/government/InventoryTable';
import PurchaseMonitor from '../components/government/PurchaseMonitor';
import AuditLogTable from '../components/government/AuditLogTable';

export default function GovernmentDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Government Dashboard</h1>

      <h2>Vaccination Records</h2>
      <VaccinationTable />

      <h2>Inventory Overview</h2>
      <InventoryTable />

      <h2>Purchase Monitoring</h2>
      <PurchaseMonitor />

      <h2>Audit Log</h2>
      <AuditLogTable />
    </div>
  );
}