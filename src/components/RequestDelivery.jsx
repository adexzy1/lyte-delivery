import { useState } from 'react';

const RequestDelivery = ({ userDetails, user }) => {
  const [showForm, setShowForm] = useState(false);

  const showRequestForm = () => {
    setShowForm(!showForm);
  };

  const style = {
    display: `${showForm === true ? 'block' : 'none'}`,
  };
  return (
    <section className="request-delivery">
      {showForm === false && (
        <button onClick={showRequestForm}>Request Delivery/Pickup</button>
      )}

      <section className="deliveryInfo" style={style}>
        <form>
          <p>
            Full Name:{'  '}
            <span>{user && user.displayName}</span>
          </p>
          <p>
            Business Name:{' '}
            <span>{userDetails && userDetails.businessName}</span>
          </p>

          <div className="form-field">
            <label>Address</label>
            <textarea
              required
              type="text"
              defaultValue={userDetails && userDetails.address}
            />
          </div>

          <h4>Delivery Information</h4>

          <div className="form-field">
            <label>Delivery Item</label>
            <select name="delivery item" required>
              <option value="Cake">Cake</option>
              <option value="Flower">Flower</option>
              <option value="Food">Food</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label>Delivery Location</label>
            <select name="delivery item" required>
              <option value="Iyana ipaja">Iyana ipaja</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Berger">Berger</option>
              <option value="Lekki">Lekki</option>
            </select>
          </div>

          <div className="form-field">
            <label>Delivery Date</label>
            <input type="date" name="delivery date" required />
          </div>

          <h4>Client Information</h4>

          <div className="form-field">
            <label>Client's Address</label>
            <textarea type="text" required />
          </div>

          <div className="form-field">
            <label>Client's Name</label>
            <input type="text" required />
          </div>

          <div className="form-field">
            <label>Client's contact</label>
            <input type="text" required />
          </div>

          <div className="form-field">
            <label>Alternative number (Optional)</label>
            <input type="text" />
          </div>

          <section className="request-delivery-btn">
            <button className="request-cancel-btn" onClick={showRequestForm}>
              Cancel
            </button>
            <button className="request-submit-btn">Submit</button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default RequestDelivery;
