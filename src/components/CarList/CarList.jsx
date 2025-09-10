import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectIsLoadingCars,
  selectCarsError,
  selectHasFilter,
} from '../../redux/cars/selectors';
import CarCard from '../CarCard/CarCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import css from './CarList.module.css';

export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoadingCars);
  const error = useSelector(selectCarsError);
  const hasFilter = useSelector(selectHasFilter);

  useEffect(() => {
    if (cars.length === 0 && !hasFilter) {
      dispatch(fetchCars({ page: 1 }));
    }
  }, [dispatch, cars.length, hasFilter]);

  if (cars.length === 0 && isLoading) {
    return <p>Loading cars...</p>;
  }
  if (error) return <p>Error: {error}</p>;
  if (!cars || cars.length === 0) return <p>No cars found.</p>;

  return (
    <div className={css.container}>
      <div className={css.carList}>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div>
        <LoadMoreBtn />
        {isLoading && <p>Loading more cars...</p>}
      </div>
    </div>
  );
}
