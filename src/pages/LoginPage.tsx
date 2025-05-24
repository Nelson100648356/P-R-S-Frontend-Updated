import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) return;

    const password = prompt(`Enter password for ${role.toUpperCase()}`);
    if (!password) {
      alert('Password is required.');
      return;
    }

    const rolePasswords: { [key: string]: string } = {
      government: 'gov123',
      merchant: 'merchant123',
      public: 'public123',
    };

    if (password === rolePasswords[role]) {
      navigate(`/${role}`);
    } else {
      alert('Incorrect password.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome To Pandemic Resilience System</h1>
      <p>Select your role to proceed:</p>

      <select
        value={role}
        onChange={e => setRole(e.target.value)}
        style={styles.select}
      >
        <option value="">-- Select Role --</option>
        <option value="government">Government Official</option>
        <option value="merchant">Merchant</option>
        <option value="public">Public User</option>
      </select>

      <button
        onClick={handleLogin}
        style={styles.button}
        disabled={!role}
      >
        Login
      </button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '60px',
    background: '#fff',
    maxWidth: '400px',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 0 12px rgba(0,0,0,0.05)',
  },
  select: {
    padding: '10px',
    fontSize: '1rem',
    margin: '20px 0',
    width: '80%',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
