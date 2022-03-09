import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase-config';
import Spinner from '../img/spinner.svg';

const CalculateQuote = ({ calc }) => {
  const [locations, setLocations] = useState([]);
  const [pickUpPrice, setPickUpPrice] = useState('');
  const [dropOffPrice, setDropOffPrice] = useState('');
  const [total, setTotal] = useState('');
  const [loading, setLoading] = useState(false);

  const calculatePrice = () => {
    if (pickUpPrice !== '' && dropOffPrice !== '') {
      const totalPrice = pickUpPrice + dropOffPrice;
      setTotal(totalPrice);

      //show spinner
      setLoading(true);

      //remove spinner after 2sec
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setTotal('');
    }
  };

  const pickUpInputCahnge = (e) => {
    setPickUpPrice(parseInt(e.target.value));
    setTotal('');
  };

  const dropOffInputCahnge = (e) => {
    setDropOffPrice(parseInt(e.target.value));
    setTotal('');
  };

  useEffect(() => {
    const colRef = collection(db, 'locations');

    const getLocations = async () => {
      try {
        const response = await getDocs(colRef);

        let locationsData = [];
        response.forEach((doc) => {
          locationsData.push({ ...doc.data(), id: doc.id });
        });

        setLocations(locationsData);
      } catch (err) {}
    };

    getLocations();
  }, []);

  return (
    <section className="calculate-quote">
      <section>
        {/* show spinner if no data */}
        {locations.length === 0 && (
          <section className="spinner">
            <img src={Spinner} alt="loading" />
          </section>
        )}

        {/* show component once  location data is available */}
        {locations.length !== 0 && (
          <section>
            <section className="pick-up-location">
              <p>Select Pickup Location</p>
              <select name="pick-up" onChange={(e) => pickUpInputCahnge(e)}>
                <option>Select</option>
                {locations.map((item) => (
                  <option value={item.price} key={item.id}>
                    {item.location}
                  </option>
                ))}
              </select>
            </section>

            <section className="drop-off-location">
              <p>Select Drop off Location</p>
              <select name="drop-off" onChange={(e) => dropOffInputCahnge(e)}>
                <option>Select</option>
                {locations.map((item) => (
                  <option value={item.price} key={item.id}>
                    {item.location}
                  </option>
                ))}
              </select>
            </section>

            <section id="total">
              <p>Total:</p>
              {loading === true ? <img src={Spinner} alt="loading" /> : total}
            </section>

            <section className="button">
              {/* if total is not empty show request delivery button */}
              {total && loading === false ? (
                <button>Request Delivery</button>
              ) : (
                <button onClick={calculatePrice}>Calculate Price</button>
              )}

              <button className="close-calc" onClick={() => calc()}>
                Cancel
              </button>
            </section>

            <span className="disclaimer">
              Disclaimer: This quote is only for cake delivery, and the actual
              pricing varies when delivering tier and delicate cakes. Have a
              cake to deliver? Signup now, and make a request!
            </span>
          </section>
        )}
      </section>
    </section>
  );
};

export default CalculateQuote;
