import deliveryImg from '../img/service-delivery.svg';
import delicate from '../img/safe-delivery.png';
import cake from '../img/cake.png';
import food from '../img/food.png';
import flower from '../img/flower.png';
import '../css/services.css';

const Services = () => {
  return (
    <section className="service-container" id="services">
      <h2 className="title">
        We Provide Services <br /> You Can Rely On
      </h2>
      <section className="left-service">
        <p>
          At Lyte Delivery, our goal is to provide the safe delivery of edibles
          and delicate items, ensuring that all deliveries are done safely and
          never compromised.
        </p>
        <section className="service-img">
          <img src={deliveryImg} alt="delivery man" />
        </section>
      </section>

      <section className="right-service">
        <section className="services">
          <img src={cake} alt="cake icon" />
          <div>
            <h3>Cake Delivery</h3>
            <p>
              We partner with bakers across the locations that we serve to
              deliver their cakes to their customers.
            </p>
          </div>
        </section>

        <section className="services">
          <img src={food} alt="food icon" />
          <div>
            <h3>Food Delivery</h3>
            <p>
              We create partnerships with caterers in the locations we cover to
              deliver their food to their customers.
            </p>
          </div>
        </section>

        <section className="services">
          <img src={flower} alt="flower icon" />
          <div>
            <h3>Flowers Delivery</h3>
            <p>
              Contact us today if you are looking to deliver flowers to your
              loved ones or anyone in the locations we operate in.
            </p>
          </div>
        </section>

        <section className="services">
          <img src={delicate} alt="delicate icon" />
          <div>
            <h3>Other Delicate Items</h3>
            <p>
              Try out Lyte Delivery today if you have any edible or delicate
              item(s) you are looking to deliver across our cover locations.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Services;
