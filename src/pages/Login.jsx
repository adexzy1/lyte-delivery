import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config/firebase-config';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/onboarding.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      //setToken to local storage
      localStorage.setItem('token', response.user.uid);

      //reset form data
      e.target.reset();

      //navigate to the page the user is trying to access
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="login-form">
      <h1>Welcome Back</h1>
      <p>Login To Your Account</p>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
