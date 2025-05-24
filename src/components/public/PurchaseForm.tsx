import React, { useState } from 'react';
import axios from 'axios';

export default function PurchaseForm() {
  const [individualId, setIndividualId] = useState('');
  const [storeId, setStoreId] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      // Step 1: Check if a restriction exists for the item
      const restrictionRes = await axios.get(`http://127.0.0.1:8000/purchaserestrictions/by-item/${itemName}`);
      const restriction = restrictionRes.data;

      // Step 2: If restriction found, get total quantity purchased in the period
      const purchaseRes = await axios.get(`http://127.0.0.1:8000/purchases/by-user-item/${individualId}/${itemName}?period=${restriction.period_type}`);
      const totalPurchased = purchaseRes.data.total_quantity;

      const requestedQuantity = parseInt(quantity, 10);

      if (totalPurchased + requestedQuantity > restriction.limit_per_period) {
        setMessage(`❌ Purchase blocked: Limit of ${restriction.limit_per_period} per ${restriction.period_type} exceeded.`);
        return;
      }

      // Step 3: Proceed with purchase
      const purchasePayload = {
        individual_id: parseInt(individualId, 10),
        store_id: parseInt(storeId, 10),
        item_name: itemName,
        quantity: requestedQuantity,
      };

      await axios.post('http://127.0.0.1:8000/purchases/', purchasePayload);
      setMessage('✅ Purchase successful!');
    } catch (err: any) {
      if (err.response?.status === 404) {
        // No restriction found – allow purchase
        const fallbackPayload = {
          individual_id: parseInt(individualId, 10),
          store_id: parseInt(storeId, 10),
          item_name: itemName,
          quantity: parseInt(quantity, 10),
        };
        await axios.post('http://127.0.0.1:8000/purchases/', fallbackPayload);
        setMessage('✅ Purchase successful (no restrictions found)!');
      } else {
        setMessage('❌ Error processing purchase.');
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Purchase Item</h2>

      <input
        type="number"
        placeholder="Individual ID"
        value={individualId}
        onChange={(e) => setIndividualId(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Store ID"
        value={storeId}
        onChange={(e) => setStoreId(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button type="submit">Submit Purchase</button>

      {message && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>}
    </form>
  );
}

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#f9f9f9',
};
