import React from 'react';

function SampleDashboard() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>Sample Dashboard</h1>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <div style={{ background: '#f0f2f5', padding: 24, borderRadius: 8, flex: 1 }}>
          <h2>Total Users</h2>
          <p style={{ fontSize: 32, margin: 0 }}>1,234</p>
        </div>
        <div style={{ background: '#f0f2f5', padding: 24, borderRadius: 8, flex: 1 }}>
          <h2>Active Sessions</h2>
          <p style={{ fontSize: 32, margin: 0 }}>87</p>
        </div>
        <div style={{ background: '#f0f2f5', padding: 24, borderRadius: 8, flex: 1 }}>
          <h2>Revenue</h2>
          <p style={{ fontSize: 32, margin: 0 }}>$4,500</p>
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: 8, padding: 24 }}>
        <h3>Recent Activity</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #eee', paddingBottom: 8 }}>User</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #eee', paddingBottom: 8 }}>Action</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #eee', paddingBottom: 8 }}>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>Signed In</td>
              <td>2 min ago</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>Purchased Subscription</td>
              <td>10 min ago</td>
            </tr>
            <tr>
              <td>Lisa Wong</td>
              <td>Signed Out</td>
              <td>20 min ago</td>
            </tr>
            <tr>
              <td>Tom Brown</td>
              <td>Updated Profile</td>
              <td>1 hr ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// For demonstration/testing:
export default SampleDashboard;
