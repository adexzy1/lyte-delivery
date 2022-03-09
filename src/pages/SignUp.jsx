/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import Logo from '../img/lyte-logo.png';
import spinner from '../img/spinner.svg';
import { useNavigate } from 'react-router-dom';
import '../css/onboarding.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [passRequirement, setPassRequirement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accCreated, setAccCreated] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef();
  const PasswordRef = useRef();
  const fullNameRef = useRef();

  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

  const emailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    emailRef.current.focus();
    emailRef.current.style.border = '';
  };
  const passChange = (e) => {
    setPassword(e.target.value);
    setError('');
    PasswordRef.current.style.border = '';
  };
  const fullNameChange = (e) => {
    setFullName(e.target.value);
    setError('');
    fullNameRef.current.style.border = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullNameRef.current.value === '') {
      fullNameRef.current.focus();
      fullNameRef.current.style.border = '1px solid red';
    } else if (!emailRef.current.value.toLowerCase().match(emailRegex)) {
      emailRef.current.focus();
      emailRef.current.style.border = '1px solid red';
    } else if (!PasswordRef.current.value.match(passRegex)) {
      PasswordRef.current.focus();
      PasswordRef.current.style.border = '1px solid red';
    } else {
      createUser(e);
    }
  };

  const createUser = async (e) => {
    handleFocus();
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: fullName,
      });

      console.log(response);

      // clear form input
      e.target.reset();

      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setAccCreated(true);
    } catch (err) {
      handleError(err.code);
    } finally {
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  };

  const handleFocus = () => {
    setPassRequirement(!passRequirement);
  };

  const handleError = (err) => {
    setLoading(false);
    console.log(err);
    switch (err) {
      case 'auth/invalid-email':
        setError(<p id="error">Enter a valid Email</p>);
        break;
      case 'auth/weak-password':
        setError(<p id="error">Enter a Valid Password</p>);
        break;
      case 'auth/email-already-in-use)':
        setError(<p id="error">Account already exist! Login</p>);
        break;
      default:
        setError('Signup failed try again');
    }
  };

  return (
    <section className="form-container">
      {loading === true && (
        <section className="spinner">
          <img src={spinner} alt="loading.." />
        </section>
      )}
      {accCreated === true && (
        <section>
          <p className="acc-created">Account Created Successfully !</p>
        </section>
      )}

      <section className="onboard-logo-container">
        <img src={Logo} alt="logo" />
      </section>

      <section className="signup-form">
        <section className="form-title">
          <h1>Create An Account</h1>
          <p>Complete this Form to Quickly Aetup an Account</p>
        </section>

        {/* show error */}
        {error}

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              ref={fullNameRef}
              onChange={(e) => fullNameChange(e)}
            />
          </div>

          <div className="form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => emailChange(e)}
              ref={emailRef}
            />
          </div>

          <div className="form-input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => passChange(e)}
              ref={PasswordRef}
              onFocus={handleFocus}
            />
            {passRequirement === true && (
              <section className="pass-req">
                <p>Password Must Contain at Least:</p>
                <ul>
                  <li>6 characters</li>
                  <li>1 uppercase letter</li>
                  <li>1 lowercase letter</li>
                  <li>1 lowercase letter</li>
                  <li>One number</li>
                </ul>
              </section>
            )}
          </div>

          <button className="login-btn" type="submit">
            Create Account
          </button>
        </form>
        <section className="Dont-have-acc">
          <p>
            Already have an Account? <a href="login">Login</a>
          </p>
        </section>
      </section>
    </section>
  );
};

export default SignUp;
