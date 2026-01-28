import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  

  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  


  const logout = () => {
    setIsLogout(true);
    if (loginFormRef.current && registerFormRef.current) {
      loginFormRef.current.style.left = "4px";
      registerFormRef.current.style.right = "-520px";
    }
  };


  }