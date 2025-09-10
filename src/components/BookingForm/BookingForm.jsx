import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectCarDetails } from '../../redux/cars/selectors.js';
import CarImg from '../CarImg/CarImg.jsx';
import css from './BookingForm.module.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const car = useSelector(selectCarDetails);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(res => setTimeout(res, 1000));

      toast.success('Your car has been successfully booked!');
      setFormData({ name: '', email: '', date: '', comment: '' });
    } catch (error) {
      toast.error('Failed to book the car. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.imgBox}>
        <CarImg car={car} />
      </div>
      <div className={css.contentBox}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>

        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className={css.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={css.input}
            required
          />
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Booking date"
            className={css.input}
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            className={css.textarea}
          />
          <button type="submit" disabled={isSubmitting} className={css.button}>
            {isSubmitting ? 'Booking...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
