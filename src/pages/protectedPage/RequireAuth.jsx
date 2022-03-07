import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { auth } from '../../config/firebase-config';

const RequireAuth = () => {
  const location = useLocation();
  const loggedInUser = localStorage.getItem('token');
  const user = auth.currentUser;

  console.log(user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
