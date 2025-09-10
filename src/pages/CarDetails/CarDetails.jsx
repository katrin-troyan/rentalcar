import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../redux/cars/operations';
import {
  selectCarDetails,
  selectIsLoadingCarDetails,
  selectCarDetailsError,
} from '../../redux/cars/selectors.js';

import CarInfo from '../../components/CarInfo/CarInfo.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import css from './CarDetails.module.css';

export default function CarDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoadingCarDetails);
  const error = useSelector(selectCarDetailsError);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!car) return <p>No car found</p>;

  return (
    <div className={css.container}>
      <BookingForm />
      <CarInfo car={car} />
    </div>
  );
}
