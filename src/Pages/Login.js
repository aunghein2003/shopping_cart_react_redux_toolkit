import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!user || !password) {
      alert('Username and Password cannot be empty!!');
      return;
    }
    dispatch(login({ username: user, password: password }));
    navigate('/');
  };

  return (
    <div className='loginBox'>
      <form onSubmit={submitHandler}>
        <h3>Login</h3>
        <div className='username'>
          <label>Username : </label>
          <input
            type='text'
            placeholder='UserName'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className='password'>
          <label>Password : </label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Login;
