import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Purchase {
  purchase_id: number;
  individual_id: number;
  store_id: number;
  purchase_date: string;
  total_amount: number;
}

export default function SalesReporter() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/purchases/')
      .then(res => setPurchases(res.data))
      .catch(err => console.error('Error loading sales data:', err));
  }, []);

  return (
    <div>
      <p>Reported sales:</p>
      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Purchase ID</th>
            <th>Store ID</th>
            <th>Individual ID</th>
            <th>Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.purchase_id}>
              <td>{purchase.purchase_id}</td>
              <td>{purchase.store_id}</td>
              <td>{purchase.individual_id}</td>
              <td>{new Date(purchase.purchase_date).toLocaleDateString()}</td>
              <td> £{typeof purchase.total_amount === 'number'? purchase.total_amount.toFixed(2): '0.00'}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
