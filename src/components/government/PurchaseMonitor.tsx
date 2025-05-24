// This component fetches and lists purchase transactions, showing quantity, date, and individual or store data.

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Purchase {
  purchase_id: number;
  individual_id: number;
  store_id: number;
  purchase_date: string;
  total_amount: number;
}

export default function PurchaseMonitor() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/purchases/')
      .then(res => setPurchases(res.data))
      .catch(err => console.error('Failed to load purchases:', err));
  }, []);

  return (
    <table border={1} cellPadding={6} cellSpacing={0}>
      <thead>
        <tr>
          <th>Purchase ID</th>
          <th>Individual ID</th>
          <th>Store ID</th>
          <th>Date</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {purchases.map((p) => (
          <tr key={p.purchase_id}>
            <td>{p.purchase_id}</td>
            <td>{p.individual_id}</td>
            <td>{p.store_id}</td>
            <td>{new Date(p.purchase_date).toLocaleDateString()}</td>
            <td>£{typeof p.total_amount === 'number' ? p.total_amount.toFixed(2): '0.00'}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}
