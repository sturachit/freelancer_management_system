import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ProjectForm from './ProjectForm';
import PaymentList from './PaymentList';
import PaymentForm from './PaymentForm'; 

const Dashboard = () => {
  const navigate = useNavigate(); 
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]); 


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
    setPayments([...payments, newPayment]);
  };

  const markPaymentAsPaid = (id) => {
    setPayments(payments.map(payment => payment.id === id ? { ...payment, status: 'Paid' } : payment));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('isAuthenticated'); 
    localStorage.removeItem('user'); 
    console.log('Navigating to login...');
    navigate('/register'); 
  };
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {projects.map((project) => (
          <div key={project.id} className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600">Due: {project.dueDate}</p>
            <p className={`text-gray-600 ${project.status === 'Completed' ? 'font-semibold text-green-600' : 'text-red-600'}`}>
              Status: {project.status}
            </p>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() =>
                  updateProjectStatus(
                    project.id,
                    project.status === 'Active' ? 'Completed' : 'Active'
                  )
                }
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300"
              >
                {project.status === 'Active' ? 'Mark as Completed' : 'Mark as Active'}
              </button>
              <button
                onClick={() => deleteProject(project.id)}
                className="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Form */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Project</h2>
        <ProjectForm addProject={addProject} />
      </div>

      {/* Payment Form */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Record Payment</h2>
        <PaymentForm addPayment={addPayment} />
      </div>

      {/* Payment List */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payments</h2>
        <PaymentList payments={payments} markPaymentAsPaid={markPaymentAsPaid} />
      </div>
    </div>
  );
};

export default Dashboard;
