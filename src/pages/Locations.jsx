import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import Spinner from '../img/spinner.svg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/location.css';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
      } catch (err) {
        console.log(err);
      }
    };

    getLocations();
  }, []);

  return (
    <section>
      <NavBar />
      <section className="locations-container">
        <section className="search-box">
          <input
            type="search"
            placeholder="search location"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch />
        </section>

        <section className="locations">
          {locations.length === 0 ? (
            <section className="spinner">
              <img src={Spinner} alt="loading" />
            </section>
          ) : (
            <section>
              {locations
                .filter((val) => {
                  if (val === '') {
                    return val;
                  } else if (
                    val.location
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => (
                  <p key={item.id}>{item.location}</p>
                ))}
            </section>
          )}
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Locations;
