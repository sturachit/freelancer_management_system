import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
  const [email, setEmail] = useState(''); // Change username to email
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true'); 
      localStorage.setItem('user', JSON.stringify({ email })); 
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
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
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <span className="text-sm">Don't have an account?</span>
          <Link to="/register" className="text-blue-500 hover:underline ml-1">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
