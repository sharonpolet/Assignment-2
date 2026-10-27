import React from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import EmployeeForm from './pages/EmployeeForm.jsx';

export default function App() {
  const location = useLocation();
  return <div className="app-shell">
    <header className="topbar">
      <div className="brand"><div className="brand-mark">P</div><div><div className="brand-name">PeopleDesk</div><div className="brand-subtitle">Employee workspace</div></div></div>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/employee-form" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>Employee Form</NavLink>
      </nav>
    </header>
    <main className="page-wrap" key={location.pathname}>
      <Routes><Route path="/" element={<Dashboard />} /><Route path="/employee-form" element={<EmployeeForm />} /><Route path="*" element={<Dashboard />} /></Routes>
    </main>
    <footer className="footer">PeopleDesk <span>·</span> Simple employee management</footer>
  </div>;
}
