import CarInfo from '../../components/CarInfo/CarInfo.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCarDetails } from '../../hooks/useCarDetails.js';
import css from './CarDetails.module.css';

export default function CarDetails() {
  const { car, isLoading, error } = useCarDetails();

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!car) return <p>No car found</p>;

  return (
    <div className={css.container}>
      <BookingForm car={car} />
      <CarInfo car={car} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}