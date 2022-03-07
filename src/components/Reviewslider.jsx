import reviews from './reviewdata';
import Slide from './ReviewCard';

const Slider = ({ slideIndex }) => {
  console.log(slideIndex);
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${reviews.length},100%)`,
    width: '100%',
    transform: `translateX(${slideIndex * -100}%)`,
    transition: '.5s ease all',
  };

  return (
    <section className="wrapper" style={style}>
      {reviews.map((review, index) => (
        <Slide review={review} key={index} />
      ))}
    </section>
  );
};

export default Slider;
