import Slide from './ReviewCard';
import spinner from '../img/spinner.svg';

const Slider = ({ slideIndex, reviews }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${reviews.length},100%)`,
    width: '100%',
    transform: `translateX(${slideIndex * -100}%)`,
    transition: '.5s ease all',
  };

  return (
    <section>
      {reviews.length === 0 && (
        <section className="spinner">
          <img src={spinner} alt="loading" />
        </section>
      )}

      {reviews.length !== 0 && (
        <section className="wrapper" style={style}>
          {reviews.map((review, index) => (
            <Slide review={review} key={index} />
          ))}
        </section>
      )}
    </section>
  );
};

export default Slider;
