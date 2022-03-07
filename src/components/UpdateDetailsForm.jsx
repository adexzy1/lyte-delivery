import { useState } from 'react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase-config';

const UpdateDetailsForm = ({ showEditBox, setShowEditBox, userDetails }) => {
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const user = auth.currentUser;

  const toggleEditBox = () => {
    setShowEditBox(!showEditBox);
  };

  //set body overflow-Y to hidden if editbox is active

  if (showEditBox === true) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'initial';
  }

  const style = {
    display: `${showEditBox === true ? 'flex' : 'none'}`,
  };

  const updateDetails = async (e) => {
    e.preventDefault();

    const docRef = doc(db, 'users', user.uid);

    try {
      const response = await setDoc(docRef, {
        businessName,
        phone,
        address,
        Timestamp: serverTimestamp(),
      });

      console.log(response);

      // clear form input
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="update-form" style={style}>
      <span className="cancel-btn" onClick={toggleEditBox}>
        X
      </span>

      <form onSubmit={updateDetails}>
        <div className="form-input">
          <label>Business Name</label>
          <input
            type="text"
            name="businessName"
            defaultValue={userDetails && userDetails.businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>

        <div className="form-input">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            defaultValue={userDetails && userDetails.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-input">
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            defaultValue={userDetails && userDetails.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          Save
        </button>
      </form>
    </section>
  );
};

export default UpdateDetailsForm;
