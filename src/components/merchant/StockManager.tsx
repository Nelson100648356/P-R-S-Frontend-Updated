import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface InventoryItem {
  inventory_id: number;
  store_id: number;
  item_name: string;
  quantity_available: number;
  last_restocked: string;
}

export default function StockManager() {
  const [stock, setStock] = useState<InventoryItem[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/inventory/')
      .then(res => setStock(res.data))
      .catch(err => console.error('Failed to load stock data:', err));
  }, []);

  return (
    <div>
      <p>Current stock across your stores:</p>
      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Inventory ID</th>
            <th>Store ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Last Restocked</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item) => (
            <tr key={item.inventory_id}>
              <td>{item.inventory_id}</td>
              <td>{item.store_id}</td>
              <td>{item.item_name}</td>
              <td>{item.quantity_available}</td>
              <td>{new Date(item.last_restocked).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
