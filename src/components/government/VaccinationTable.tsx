import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Vaccination {
  record_id: number;
  individual_id: number;
  vaccine_name: string;
  dose_number: number;
  date_administered: string;
}

export default function VaccinationTable() {
  const [data, setData] = useState<Vaccination[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/vaccinations/')
      .then(res => setData(res.data))
      .catch(err => console.error('Failed to fetch vaccination data:', err));
  }, []);

  return (
    <table border={1} cellPadding={6} cellSpacing={0}>
      <thead>
        <tr>
          <th>Record ID</th>
          <th>Individual ID</th>
          <th>Vaccine</th>
          <th>Dose</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <tr key={v.record_id}>
            <td>{v.record_id}</td>
            <td>{v.individual_id}</td>
            <td>{v.vaccine_name}</td>
            <td>{v.dose_number}</td>
            <td>{new Date(v.date_administered).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
