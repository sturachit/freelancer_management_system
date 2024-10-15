import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import ProjectForm from './ProjectForm';
import PaymentList from './PaymentList';
import PaymentForm from './PaymentForm'; // Import PaymentForm

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]); // Initialize payments state

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const updateProjectStatus = (id, status) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, status } : project
      )
    );
  };

  const addPayment = (newPayment) => {
    setPayments([...payments, newPayment]); // Add new payment to the state
  };

  const markPaymentAsPaid = (id) => {
    setPayments(payments.map(payment => payment.id === id ? { ...payment, status: 'Paid' } : payment));
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove authentication flag
    localStorage.removeItem('user'); // Optionally remove user info
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>Due: {project.dueDate}</p>
            <p>Status: {project.status}</p>
            <button
              onClick={() =>
                updateProjectStatus(
                  project.id,
                  project.status === 'Active' ? 'Completed' : 'Active'
                )
              }
              className="text-sm text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded mt-2"
            >
              {project.status === 'Active' ? 'Mark as Completed' : 'Mark as Active'}
            </button>
            <button
              onClick={() => deleteProject(project.id)}
              className="text-sm text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded ml-2 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Project Form */}
      <ProjectForm addProject={addProject} />

      {/* Payment Form */}
      <PaymentForm addPayment={addPayment} /> {/* Add PaymentForm here */}

      {/* Payment List */}
      <PaymentList payments={payments} markPaymentAsPaid={markPaymentAsPaid} /> {/* Pass payments and function */}
    </div>
  );
};

export default Dashboard;
