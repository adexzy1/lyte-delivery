import { IoCall } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';

import logo from '../img/logo.png';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer>
      <section className="footer-logo">
        <img src={logo} alt="logo" />
        <p>
          You no longer have to worry about delivering your delicate and edible
          items when you use Lyte Delivery; You are assured of an excellent
          service.
        </p>
      </section>
      <section className="quick-links">
        <h5>Quick Links</h5>
        <ul>
          <li>
            <a href="#services">Sign in</a>
          </li>
          <li>
            <a href="#services">Register</a>
          </li>
          <li>
            <a href="#services">Delivery Locations</a>
          </li>
          <li>
            <a href="#services">Price Calculator</a>
          </li>
        </ul>
      </section>

      <section className="quick-links">
        <h5>Services</h5>
        <ul>
          <li>
            <a href="#services">Cake delivery</a>
          </li>
          <li>
            <a href="#services">Food delivery</a>
          </li>
          <li>
            <a href="#services">Flowers delivery</a>
          </li>
          <li>
            <a href="#services">Other delicate items</a>
          </li>
        </ul>
      </section>

      <section className="support">
        <h5>Support</h5>
        <ul>
          <li>
            <a href="mailto:Lytedelivery@gmail.com">
              <IoMail />
              Lytedelivery@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:2347082245275">
              <IoCall />
              +234 708 224 5275
            </a>
          </li>
        </ul>
      </section>

      <section className="socials">
        <h5>Follow Us On</h5>
        <ul>
          <li>
            <a href="Https://facebook.com/Lytedelivery">
              <IoLogoFacebook />
              Facebook
            </a>
          </li>

          <li>
            <a href="Https://instagram.com/Lytedelivery">
              <IoLogoInstagram />
              Instagram
            </a>
          </li>
        </ul>
      </section>

      <div className="sub-footer">
        Copyright © 2021 - 2022 Lyte Delivery. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
