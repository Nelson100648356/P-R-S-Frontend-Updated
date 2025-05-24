import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface InventoryItem {
  inventory_id: number;
  store_id: number;
  item_name: string;
  quantity_available: number;
  last_restocked: string;
}

export default function SupplyLocator() {
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/inventory/')
      .then(res => setItems(res.data))
      .catch(err => console.error('Error fetching inventory:', err));
  }, []);

  return (
    <div>
      <p>Browse available critical supplies near you:</p>
      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Store ID</th>
            <th>Available</th>
            <th>Last Restocked</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.inventory_id}>
              <td>{item.item_name}</td>
              <td>{item.store_id}</td>
              <td>{item.quantity_available}</td>
              <td>{new Date(item.last_restocked).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
