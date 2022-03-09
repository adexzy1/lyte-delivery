import './App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import RequireAuth from './pages/protectedPage/RequireAuth';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Locations from './pages/Locations';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  //check if user is loggedin
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage modal={showModal} setShowModal={setShowModal} />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/locations" element={<Locations />} />

        {/* private Route */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
