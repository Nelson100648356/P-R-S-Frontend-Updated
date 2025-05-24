import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Restriction {
  restriction_id: number;
  item_name: string;
  max_quantity: number;
  restriction_type: string;
  effective_date: string;
  expiry_date: string;
}

export default function RestrictionCompliance() {
  const [restrictions, setRestrictions] = useState<Restriction[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/purchase-restrictions/')
      .then(res => setRestrictions(res.data))
      .catch(err => console.error('Error fetching restrictions:', err));
  }, []);

  return (
    <div>
      <p>Current active purchase restrictions:</p>
      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Max Qty</th>
            <th>Type</th>
            <th>Effective</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          {restrictions.map((r) => (
            <tr key={r.restriction_id}>
              <td>{r.item_name}</td>
              <td>{r.max_quantity}</td>
              <td>{r.restriction_type}</td>
              <td>{new Date(r.effective_date).toLocaleDateString()}</td>
              <td>{new Date(r.expiry_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
