import calculator from '../img/Calculator.svg';
import '../css/requestquote.css';

const RequestQuote = () => {
  return (
    <section className="quote-container" id="calculator">
      <section className="left-quote">
        <h3>Get an Instant Quote!</h3>
        <p>
          Get an idea of our pricing for a normal-sized cake. Please choose from
          the list of the locations we deliver.
        </p>

        <button>Calculate price</button>
      </section>

      <section className="quote-img">
        <img src={calculator} alt="calculator" />
      </section>
    </section>
  );
};

export default RequestQuote;
