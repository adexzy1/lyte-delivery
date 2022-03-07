import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import '../css/onboarding.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();

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
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="signup-form">
      <h1>Create An Account</h1>
      <p>Complete this Form to Quickly Aetup an Account</p>

      <form onSubmit={handlesubmit}>
        <div className="form-input">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-input">
          <label>Email</label>
          <input
            type="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default SignUp;
