import React, { useState } from 'react';
import axios from 'axios';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'Name') {
      setFullName(value);
    } else if (id === 'Email') {
      setEmail(value);
    } else if (id === 'Password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/', {
        fullName,
        email,
        password,
      });

      // Registration successful, perform any desired actions (e.g., redirect)
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error (e.g., display an error message)
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  value={fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="my-3">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>{' '}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={!fullName || !email || !password}
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
