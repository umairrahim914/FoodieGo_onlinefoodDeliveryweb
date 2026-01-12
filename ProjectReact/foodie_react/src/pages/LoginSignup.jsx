import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);

  const login = () => {
    setIsLogin(true);
    if (loginFormRef.current && registerFormRef.current) {
      loginFormRef.current.style.left = "4px";
      registerFormRef.current.style.right = "-520px";
    }
  };

  const register = () => {
    setIsLogin(false);
    if (loginFormRef.current && registerFormRef.current) {
      loginFormRef.current.style.left = "-510px";
      registerFormRef.current.style.right = "5px";
    }
  };

  useEffect(() => {
    // Initialize positions
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
              <Link to="/" className="link">
                Home
              </Link>
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
        
        {/* Login Form */}
        <div 
          ref={loginFormRef}
          className="login-container"
          id="login"
        >
          <div className="top">
            <header>Login</header>
          </div>

          <div className="input-box">
            <input 
              type="text" 
              className="input-field"
              placeholder="Username or Email"
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <input 
              type="password" 
              className="input-field"
              placeholder="Password"
            />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className="input-box">
            <input 
              type="submit" 
              className="submit"
              value="Sign In"
            />
          </div>

          <div className="two-col">
            <div className="one">
              
            </div>
            <div className="two">
            </div>
          </div>

          <span id="login-acc-span">
            Don't have an account? 
            <a href="#" onClick={register}>Sign Up</a>
          </span>
        </div>

        {/* Register Form */}
        <div 
          ref={registerFormRef}
          className="reg-container"
          id="register"
        >
          <div className="top">
            <header>Sign Up</header>
          </div>
          
          <div className="two-forms">
            <div className="name-row">
              <div className="input-box">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Firstname"
                />
                <i className='bx bxs-user'></i>
              </div>

              <div className="input-box">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Lastname"
                />
                <i className='bx bxs-user'></i>
              </div>
            </div>

            <div className="other-fields">
              <div className="input-box">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Username"
                />
                <i className='bx bxs-user'></i>
              </div>

              <div className="input-box">
                <input 
                  type="email" 
                  className="input-field"
                  placeholder="Email"
                />
                <i className='bx bxs-envelope'></i>
              </div>

              <div className="input-box">
                <input 
                  type="password" 
                  className="input-field"
                  placeholder="Password"
                />
                <i className='bx bxs-lock-alt'></i>
              </div>

              <div className="input-box">
                <input 
                  type="password" 
                  className="input-field"
                  placeholder="Confirm Password"
                />
                <i className='bx bxs-lock-alt'></i>
              </div>

              <div className="input-box">
                <input 
                  type="submit" 
                  className="submit"
                  value="Register"
                />
              </div>
            </div>

            <div className="two-col">
              <span id="reg-acc-span">
                Already have an account? 
                <a href="#" onClick={login}>Login</a>
              </span>
              <div className="two">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;