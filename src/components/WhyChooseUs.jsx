import FastDelivery from '../img/fast-delivery.png';
import SafeDelivery from '../img/safe-delivery.png';
import rest from '../img/rest.png';
import customer from '../img/customer-service.png';
import '../css/whychooseus.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="title">Why Choose Us</h2>
      <section className="content-container">
        <section>
          <img src={FastDelivery} alt="delivery icon" />
          <h5>Fastest Service</h5>
          <p>
            Lyte delivery offers the fastest and most reliable delivery service
            for edible and delicate items. Try our services today!
          </p>
        </section>

        <section>
          <img src={rest} alt="rest icon" />
          <h5>Rest of Mind</h5>
          <p>
            We ensure that your delivery goes smoothly, giving you the rest of
            mind that you need.
          </p>
        </section>

        <section>
          <img src={customer} alt="customer service icon" />
          <h5>Best Customer Service</h5>
          <p>
            We strive to meet the highest standards in customer service as we
            always leave a good impression for you on your customers.
          </p>
        </section>

        <section>
          <img src={SafeDelivery} alt=" safe delivery icon" />
          <h5>Safe Delivery</h5>
          <p>
            Safety is our outmost priority, we ensure our drivers are well
            trained and follow the best safety procedures at all times.
          </p>
        </section>
      </section>
    </section>
  );
};

export default WhyChooseUs;
