import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Vaccination {
  record_id: number;
  individual_id: number;
  vaccine_name: string;
  dose_number: number;
  date_administered: string;
}

export default function VaccinationUploader() {
  const [records, setRecords] = useState<Vaccination[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/vaccinations/')
      .then(res => setRecords(res.data))
      .catch(err => console.error('Failed to load vaccination records:', err));
  }, []);

  return (
    <div>
      <p>Vaccination history:</p>
      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Vaccine</th>
            <th>Dose</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.record_id}>
              <td>{record.vaccine_name}</td>
              <td>{record.dose_number}</td>
              <td>{new Date(record.date_administered).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><i>Upload functionality coming soon...</i></p>
    </div>
  );
}
