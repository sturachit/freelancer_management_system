import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation to check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem('isAuthenticated', 'true'); 
    localStorage.setItem('user', JSON.stringify({ username, email })); // Store email along with username
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="border w-full p-2 rounded mb-4"
            required
          />
          <input 
            type="email" // Change type to email
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border w-full p-2 rounded mb-4"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="border w-full p-2 rounded mb-4"
            required
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="border w-full p-2 rounded mb-4"
            required
          />
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
          >
            Register
          </button>
        </form>

        {/* Link to Login */}
        <div className="text-center">
          <span className="text-sm">Already have an account?</span>
          <Link to="/login" className="text-blue-500 hover:underline ml-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
