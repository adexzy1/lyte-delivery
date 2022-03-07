import { IoIosStar } from 'react-icons/io';

const Slide = ({ review }) => {
  return (
    <section className="slide">
      <section className="slide-content">
        <h5>{review.tag}</h5>
        <p>{review.content}</p>
        <section className="rating">
          <div>
            {review.rating.map((item, i) => (
              <IoIosStar key={i} />
            ))}
          </div>
          <div className="customer-details">
            <strong>{review.name}</strong>
            <span>{review.role}</span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Slide;
