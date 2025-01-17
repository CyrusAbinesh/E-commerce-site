import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [FormData, setFormData] = useState({
    username: 'Abin24@gmail.com',
    password: 'Abin123',
  });
   
  const [InputData, setInputData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...InputData,
      [name]: value,
    });
    console.log(InputData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FormData.username === InputData.username && FormData.password === InputData.password) {
      alert("Login Success");
      navigate('/');
    }
  };

  return (
    <div className='twin'>
    <div className="form-container rounded-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Login</h1>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="username"
            className="form-control form-control-sm"
            type="email"
            placeholder="Enter your Email"
            required
            value={InputData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your Password"
            required
            value={InputData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
        </div>

        <Link to='/register' className="register-link">Don't have an account? Register here</Link>
        
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
    </div>
  );
}

export default Login;
