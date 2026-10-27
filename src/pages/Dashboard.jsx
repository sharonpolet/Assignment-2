import React from 'react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { if (!response.ok) throw new Error('Request failed'); return response.json(); })
      .then(setUsers)
      .catch(() => setError('Could not load users. Check your internet connection and refresh the page.'))
      .finally(() => setLoading(false));
  }, []);
  return <section>
    <div className="welcome-row"><div><p className="eyebrow">OVERVIEW</p><h1>Employee Dashboard</h1><p className="page-description">A quick view of the people in your workspace.</p></div><div className="date-chip"><span className="status-dot"></span> API connected</div></div>
    <div className="summary-grid">
      <div className="summary-card"><div className="summary-icon icon-blue">♙</div><div><p className="summary-label">Listed users</p><p className="summary-value">{loading ? '—' : users.length}</p></div></div>
      <div className="summary-card"><div className="summary-icon icon-green">↗</div><div><p className="summary-label">Data source</p><p className="summary-value summary-text">External API</p></div></div>
    </div>
    <div className="panel">
      <div className="panel-heading"><div><h2>Team members</h2><p>Users retrieved from JSONPlaceholder</p></div><span className="count-pill">{loading ? 'Loading…' : `${users.length} users`}</span></div>
      {loading ? <div className="empty-state">Loading users…</div> : error ? <div className="alert alert-warning m-3">{error}</div> :
        <div className="table-responsive"><table className="table employee-table mb-0"><thead><tr><th>ID</th><th>NAME</th><th>EMAIL</th></tr></thead><tbody>
          {users.map(user => <tr key={user.id}><td><span className="id-badge">{String(user.id).padStart(2, '0')}</span></td><td><div className="person-cell"><div className="avatar">{user.name.charAt(0)}</div><span>{user.name}</span></div></td><td className="email-cell">{user.email}</td></tr>)}
        </tbody></table></div>}
    </div>
  </section>;
}
