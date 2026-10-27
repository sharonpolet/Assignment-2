import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const initialForm = { name: '', designation: '', location: '', salary: '' };

export default function EmployeeForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  function handleChange(event) { setForm({ ...form, [event.target.name]: event.target.value }); }
  function handleSubmit(event) { event.preventDefault(); setSubmitted(true); setForm(initialForm); }
  return <section className="form-page">
    <div className="welcome-row"><div><p className="eyebrow">EMPLOYEE DETAILS</p><h1>Employee Form</h1><p className="page-description">Add an employee's basic information.</p></div><button className="btn btn-light back-button" type="button" onClick={() => navigate('/')}>← Back to Home</button></div>
    <div className="form-panel"><div className="form-intro"><div className="form-icon">＋</div><div><h2>Basic information</h2><p>Fill in the details below to add an employee.</p></div></div>
      {submitted && <div className="alert alert-success" role="status">Employee details submitted successfully.</div>}
      <form onSubmit={handleSubmit}><div className="row g-4">
        <div className="col-md-6"><label className="form-label" htmlFor="name">Name</label><input className="form-control" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" required/></div>
        <div className="col-md-6"><label className="form-label" htmlFor="designation">Designation</label><input className="form-control" id="designation" name="designation" value={form.designation} onChange={handleChange} placeholder="e.g. Software Developer" required/></div>
        <div className="col-md-6"><label className="form-label" htmlFor="location">Location</label><input className="form-control" id="location" name="location" value={form.location} onChange={handleChange} placeholder="Enter location" required/></div>
        <div className="col-md-6"><label className="form-label" htmlFor="salary">Salary</label><input className="form-control" id="salary" name="salary" type="number" min="0" value={form.salary} onChange={handleChange} placeholder="Enter salary" required/></div>
      </div><div className="form-actions"><button className="btn btn-outline-secondary" type="button" onClick={() => {setForm(initialForm);setSubmitted(false);}}>Clear</button><button className="btn btn-primary submit-button" type="submit">Submit details</button></div></form>
    </div>
  </section>;
}
