import reveiwsImg from '../img/reviews-img.svg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from '../components/Reviewslider';
import { useEffect, useState } from 'react';
import '../css/reviews.css';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase-config';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [slideIndex, setSlideIndex] = useState(reviews.length - 1);

  useEffect(() => {
    const colRef = collection(db, 'reviews');

    const getReviews = async () => {
      try {
        const response = await getDocs(colRef);

        let reviewData = [];

        response.docs.forEach((items) => {
          reviewData.push({ ...items.data(), id: items.id });
        });

        setReviews(reviewData);
        setSlideIndex(reviewData.length - 1);
      } catch (err) {
        console.log(err);
      }
    };

    getReviews();
  }, []);

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
          <Slider slideIndex={slideIndex} reviews={reviews} />
        </section>
      </section>
    </section>
  );
};

export default Reviews;
