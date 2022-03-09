import calculator from '../img/Calculator.svg';
import CalculateQuote from './CalculateQuote';
import { useState } from 'react';
import '../css/requestquote.css';

const RequestQuote = () => {
  const [showCalc, setShowCalc] = useState(false);

  const Calc = () => {
    setShowCalc(!showCalc);
  };
  return (
    <section className="quote-container" id="calculator">
      <section className="left-quote">
        <h3>Get an Instant Quote!</h3>
        <p>
          Get an idea of our pricing for a normal-sized cake. Please choose from
          the list of the locations we deliver.
        </p>

        {showCalc === false && <button onClick={Calc}>Get Quote</button>}
      </section>

      <section>
        {showCalc === true ? (
          <section className="calc-quote">
            <CalculateQuote calc={Calc} />
          </section>
        ) : (
          <section className="quote-img">
            <img src={calculator} alt="calculator" />
          </section>
        )}
      </section>
    </section>
  );
};

export default RequestQuote;
