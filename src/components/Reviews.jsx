import reveiwsImg from '../img/reviews-img.svg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from '../components/Reviewslider';
import { useState } from 'react';
import '../css/reviews.css';
import reviews from './reviewdata';

const Reviews = () => {
  const [slideIndex, setSlideIndex] = useState(reviews.length - 1);

  const changeSlide = (direction) => {
    if (direction === 'next') {
      if (slideIndex !== reviews.length - 1) {
        setSlideIndex(slideIndex + 1);
      }
    } else if (direction === 'prev') {
      if (slideIndex !== 0) {
        setSlideIndex(slideIndex - 1);
      }
    }
  };
  // console.log(slideIndex);

  return (
    <section className="reviews_conatiner">
      <section className="reviews-img">
        <img src={reveiwsImg} alt="review icon" />
      </section>

      <section className="reviews-slider">
        <section className="slider-header">
          <p>What People Say </p>
          <section className="slider-control">
            <IoIosArrowBack
              className="left"
              onClick={() => changeSlide('next')}
            />
            <IoIosArrowForward
              className="right"
              onClick={() => changeSlide('prev')}
            />
          </section>
        </section>

        <section className="slider-section">
          <Slider slideIndex={slideIndex} />
        </section>
      </section>
    </section>
  );
};

export default Reviews;
