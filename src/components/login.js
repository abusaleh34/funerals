import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here we're just using a static user object, but in a real app you would get this from your API
    const user = {
      username: username,
      token: 'abcd',
    };

    // Here we're dispatching the login action with the user object as the payload
    dispatch(login(user));
  };

  return (
    <div>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
