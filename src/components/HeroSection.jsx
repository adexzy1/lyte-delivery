import heroImg from '../img/hero-img.png';
import '../css/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section_container" id="home">
      <section className="hero-img_container">
        <img src={heroImg} alt="hero" />
      </section>

      <section className="hero-text_container">
        <h1>Rendering a Stress-free Delivery</h1>
        <p>
          You no longer have to worry about delivering your delicate and edible
          items when you use Lyte Delivery; You are assured of an excellent
          service.
        </p>
        <button>Request Delivery</button>

        <section className="stats-section">
          <div className="stats">
            <p>20,000+</p>
            <span>Items Delivered</span>
          </div>
          <div className="stats">
            <p>60+</p>
            <span>SME’s</span>
          </div>
          <div className="stats">
            <p> 99.9%</p>
            <span>Successful Deliveries</span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
