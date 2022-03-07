import '../css/dashboard.css';
import avatar from '../img/avatar.png';
import { auth, db } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import UpdateDetailsForm from '../components/UpdateDetailsForm';
import RequestDelivery from '../components/RequestDelivery';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [showEditBox, setShowEditBox] = useState(false);

  const user = auth.currentUser;

  // const userId = localStorage.getItem('token');

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);

      const getUserDetails = async () => {
        try {
          const response = await getDoc(docRef);

          setUserDetails(response.data());
          console.log(response.data());
        } catch (err) {
          console.log(err);
        }
      };

      getUserDetails();
    }
  }, [user]);

  return (
    <section className="dashboard-container">
      <section className="user-profile">
        <section className="user-avatar">
          <img src={avatar} alt="user avatar" />
        </section>

        <p className="user-name">Hello {user && user.displayName}</p>
        <span className="last-login">
          Last login: {user && user.metadata.lastSignInTime.slice(0, 16)}
        </span>

        <section className="other-details">
          <p>
            Business Name:{' '}
            <strong>{userDetails && userDetails.businessName}</strong>
          </p>

          <p>
            Phone: <strong>{userDetails && userDetails.phone}</strong>
          </p>

          <p>
            Address: <strong>{userDetails && userDetails.address}</strong>
          </p>

          <section className="update-btn_container">
            <button className="update-btn" onClick={() => setShowEditBox(true)}>
              Edit Details
            </button>
          </section>
        </section>
      </section>

      <section>
        <RequestDelivery userDetails={userDetails} user={user} />
      </section>

      <UpdateDetailsForm
        showEditBox={showEditBox}
        setShowEditBox={setShowEditBox}
        userDetails={userDetails}
      />
    </section>
  );
};

export default Dashboard;
