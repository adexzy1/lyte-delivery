import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config/firebase-config';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../img/lyte-logo.png';
import spinner from '../img/spinner.svg';
import '../css/onboarding.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/dashboard';

  const emailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  const passChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleError = (err) => {
    setLoading(false);
    switch (err) {
      case 'auth/user-not-found':
        setError(<p id="error">No Account With This Email</p>);
        break;
      case 'auth/wrong-password':
        setError(<p id="error">Wrong Email or Password</p>);
        break;
      default:
        setError(<p id="error">Login Failed Try Again</p>);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      //setToken to local storage
      localStorage.setItem('token', response.user.uid);

      //reset form data
      e.target.reset();

      //navigate to the page the user is trying to access
      navigate(from, { replace: true });
    } catch (err) {
      handleError(err.code);
    }
  };

  return (
    <section className="form-container">
      {loading === true && (
        <section className="spinner">
          <img src={spinner} alt="loading.." />
        </section>
      )}

      <section className="onboard-logo-container">
        <img src={Logo} alt="logo" />
      </section>

      <section className="login-form">
        <section className="form-title">
          <h1>Welcome Back</h1>
          <p>Login To Your Account</p>
        </section>

        {/* show error */}
        {error}

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => emailChange(e)}
              required
            />
          </div>

          <div className="form-input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => passChange(e)}
              required
            />
          </div>

          <section className="reset-pass-container">
            <a href="/resetpassword">Forgot Password?</a>
          </section>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <section className="Dont-have-acc">
          <p>Don’t have an Account?</p>
          <a href="/signup">Sign up</a>
        </section>
      </section>
    </section>
  );
};

export default Login;
