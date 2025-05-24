import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AuditLog {
  log_id: number;
  user_id: number;
  action: string;
  timestamp: string;
  ip_address: string;
}

export default function AuditLogTable() {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/audit-logs/')
      .then(res => setLogs(res.data))
      .catch(err => console.error('Failed to load audit logs:', err));
  }, []);

  return (
    <table border={1} cellPadding={6} cellSpacing={0}>
      <thead>
        <tr>
          <th>Log ID</th>
          <th>User ID</th>
          <th>Action</th>
          <th>Timestamp</th>
          <th>IP Address</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.log_id}>
            <td>{log.log_id}</td>
            <td>{log.user_id}</td>
            <td>{log.action}</td>
            <td>{new Date(log.timestamp).toLocaleString()}</td>
            <td>{log.ip_address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
