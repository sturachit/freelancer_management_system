import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      name,
      dueDate,
      status
    };
    addProject(newProject);
    setName('');
    setDueDate('');
    setStatus('Active');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
