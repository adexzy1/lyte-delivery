import HeroSection from '../components/HeroSection';
import RequestQuote from '../components/RequestQuote';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import '../App.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <RequestQuote />
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </>
  );
};

export default LandingPage;
