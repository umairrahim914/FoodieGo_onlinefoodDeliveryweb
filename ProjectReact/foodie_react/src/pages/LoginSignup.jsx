import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // IMPORT: Auth service
import './LoginSignup.css';

const LoginSignup = () => {
  // STATE: Form visibility
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);

  // STATE: Login form data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // STATE: Signup form data
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // STATE: Loading indicator
  const [isLoading, setIsLoading] = useState(false);

  // FUNCTION: Block home access without login
  const handleHomeClick = (e) => {
    e.preventDefault();
    alert('Please login first!');
  };

  // FUNCTION: Switch to login form
  const login = () => {
    setIsLogin(true);
    if (loginFormRef.current && registerFormRef.current) {
      loginFormRef.current.style.left = "4px";
      registerFormRef.current.style.right = "-520px";
    }
  };

  // FUNCTION: Switch to register form
  const register = () => {
    setIsLogin(false);
    if (loginFormRef.current && registerFormRef.current) {
      loginFormRef.current.style.left = "-510px";
      registerFormRef.current.style.right = "5px";
    }
  };

  // FUNCTION: Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // CALL: Auth service login
      const result = await authService.login(loginData);

      if (result.success) {
        // SAVE: Token and user data to localStorage
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        
        alert('Login successful!');
        navigate('/'); // REDIRECT: To home page
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Network error. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // FUNCTION: Handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // VALIDATE: Password match
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // VALIDATE: Password length
    if (signupData.password.length < 6) {
      alert('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    try {
      // PREPARE: User data (exclude confirmPassword)
      const userData = {
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        username: signupData.username,
        email: signupData.email,
        password: signupData.password
      };

      // CALL: Auth service register
      const result = await authService.register(userData);

      if (result.success) {
        // SAVE: Token and user data to localStorage
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        
        alert('Registration successful!');
        navigate('/'); // REDIRECT: To home page
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Network error. Please try again.');
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // FUNCTION: Handle login input changes
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // FUNCTION: Handle signup input changes
  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  // EFFECT: Initialize form positions on component mount
  useEffect(() => {
    if (loginFormRef.current && registerFormRef.current) {
      loginFormRef.current.style.left = "4px";
      registerFormRef.current.style.right = "-520px";
    }
  }, []);

  return (
    <div className="login-wrapper">
      
      {/* Navigation */}
      <nav className="login-nav">
        <div className="nav-logo">
          <p>FoodieGo</p>
        </div>

        <div className="nav-menu">
          <ul className="navlist">
            <li>
              <a href="#" className={`link ${!isLogin ? 'active' : ''}`}>
                Register
              </a>
            </li>
            <li>
              <a href="#" onClick={handleHomeClick} className="link">Home</a>
            </li>
          </ul>
        </div>

        <div className="nav-button">
          <button 
            className={`btn ${isLogin ? 'btn-white' : ''}`}
            onClick={login}
          >
            Login
          </button>
          <button 
            className={`btn ${!isLogin ? 'btn-white' : ''}`}
            id="registerBtn"
            onClick={register}
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Form Container */}
      <div className="form-box">
        
        {/* LOGIN FORM */}
        <div ref={loginFormRef} className="login-container" id="login">
          <div className="top">
            <header>Login</header>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input 
                type="text" 
                name="email"
                className="input-field"
                placeholder="Username or Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
              <i className='bx bxs-user'></i>
            </div>

            <div className="input-box">
              <input 
                type="password" 
                name="password"
                className="input-field"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <i className='bx bxs-lock-alt'></i>
            </div>

            <div className="input-box">
              <input 
                type="submit" 
                className="submit"
                value={isLoading ? "Signing In..." : "Sign In"}
                disabled={isLoading}
              />
            </div>
          </form>

          <span id="login-acc-span">
            Don't have an account? 
            <a href="#" onClick={register}>Sign Up</a>
          </span>
        </div>

        {/* SIGNUP FORM */}
        <div ref={registerFormRef} className="reg-container" id="register">
          <div className="top">
            <header>Sign Up</header>
          </div>
          
          <form onSubmit={handleSignup}>
            <div className="two-forms">
              <div className="name-row">
                <div className="input-box">
                  <input 
                    type="text" 
                    name="firstName"
                    className="input-field"
                    placeholder="Firstname"
                    value={signupData.firstName}
                    onChange={handleSignupChange}
                    required
                  />
                  <i className='bx bxs-user'></i>
                </div>

                <div className="input-box">
                  <input 
                    type="text" 
                    name="lastName"
                    className="input-field"
                    placeholder="Lastname"
                    value={signupData.lastName}
                    onChange={handleSignupChange}
                    required
                  />
                  <i className='bx bxs-user'></i>
                </div>
              </div>

              <div className="other-fields">
                <div className="input-box">
                  <input 
                    type="text" 
                    name="username"
                    className="input-field"
                    placeholder="Username"
                    value={signupData.username}
                    onChange={handleSignupChange}
                    required
                  />
                  <i className='bx bxs-user'></i>
                </div>

                <div className="input-box">
                  <input 
                    type="email" 
                    name="email"
                    className="input-field"
                    placeholder="Email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                  <i className='bx bxs-envelope'></i>
                </div>

                <div className="input-box">
                  <input 
                    type="password" 
                    name="password"
                    className="input-field"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                    minLength="6"
                  />
                  <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box">
                  <input 
                    type="password" 
                    name="confirmPassword"
                    className="input-field"
                    placeholder="Confirm Password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                    minLength="6"
                  />
                  <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box">
                  <input 
                    type="submit" 
                    className="submit"
                    value={isLoading ? "Registering..." : "Register"}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>
          </form>

          <span id="reg-acc-span">
            Already have an account? 
            <a href="#" onClick={login}>Login</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
